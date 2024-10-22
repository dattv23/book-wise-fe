'use client'

import toast from 'react-hot-toast'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Error as TError } from '@/types'
import { Input } from '@/components/Inputs'
import { checkoutFormAction } from './action'
import { ApplyCouponForm } from '@/components'
import { SubmitButton } from '@/components/Button'
import { CheckOutTable } from '@/components/Tables'
import { cn, getError, convertPriceByLocale, calculateTotalPriceCart, calculateShippingFee } from '@/lib/utils'
import { useCartStore } from '@/stores'
import { Locale } from '@/configs'
import { useDebounce } from '@/hooks/useDebounce'
import { useRouter } from '@/navigation'

const CheckOutForm: React.FC = () => {
  const params = useParams()
  const { cart, removeAll } = useCartStore()
  const t = useTranslations('CheckOutForm')
  const router = useRouter()

  const [errors, setErrors] = useState<TError[]>([])
  const [shipping, setShipping] = useState<number>(0)
  const [province, setProvince] = useState('')
  const [district, setDistrict] = useState('')
  const [address, setAddress] = useState('')

  const debouncedProvince = useDebounce(province, 500)
  const debouncedDistrict = useDebounce(district, 500)
  const debouncedAddress = useDebounce(address, 500)

  useEffect(() => {
    const calculateShipping = async () => {
      if (debouncedProvince && debouncedDistrict && debouncedAddress) {
        const fee = await calculateShippingFee(debouncedProvince, debouncedDistrict, debouncedAddress, cart)
        setShipping(Number(fee ?? 0))
      }
    }

    calculateShipping()
  }, [debouncedProvince, debouncedDistrict, debouncedAddress, cart])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setErrors(errors.filter((error) => error.key != name))

    switch (name) {
      case 'recipientCity':
        setProvince(value)
        break
      case 'recipientDistrict':
        setDistrict(value)
        break
      case 'recipientAddress':
        setAddress(value)
        break
    }
  }

  const inputs = [
    { name: 'recipientFirstName', type: 'text' },
    { name: 'recipientLastName', type: 'text' },
    { name: 'recipientCity', type: 'text' },
    { name: 'recipientDistrict', type: 'text' },
    { name: 'recipientAddress', type: 'text' },
    { name: 'recipientEmail', type: 'email' },
    { name: 'recipientPhone', type: 'text' }
  ]

  return (
    <div className='w-full rounded-lg p-6'>
      <form
        action={async (formData) => {
          const result = await checkoutFormAction({
            formData,
            onChangeErrors: setErrors,
            totalAmount: calculateTotalPriceCart(cart) + shipping,
            cart
          })
          if (result?.isSuccess) {
            removeAll()
            router.push('/')
            toast.success('Place order successful')
          } else {
            toast.success('Place order failed')
          }
        }}
        className={cn('flex w-full flex-col gap-2', errors && 'gap-3')}
      >
        <div className='flex justify-between'>
          <div className='w-full max-w-md space-y-4'>
            {inputs.map((item, id) => (
              <Input
                key={id}
                type={item.name}
                name={item.name}
                id={item.name}
                label={t(item.name)}
                onChange={(e) => handleChangeInput(e)}
                error={getError(errors, item.name)}
              />
            ))}
          </div>
          <div className='w-full max-w-md'>
            <CheckOutTable />
            <div className='mt-6'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <p>{t('Subtotal')}</p>
                  <p>{`${convertPriceByLocale(calculateTotalPriceCart(cart), params.locale as Locale)}`}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <p>{t('Shipping')}</p>
                  <p>{convertPriceByLocale(shipping, params.locale as Locale)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                  <p>{t('Total')}</p>
                  <p>{`${convertPriceByLocale(calculateTotalPriceCart(cart) + shipping, params.locale as Locale)}`}</p>
                </div>
              </div>
              <div className='mt-8'>
                <div className='mt-4 space-y-6'>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      id='bank'
                      name='payment-method'
                      className='h-4 w-4 border-zinc-300 text-red-600'
                    />
                    <label htmlFor='bank' className='ml-2 block text-sm text-zinc-900'>
                      {t('Bank')}
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      id='cash-on-delivery'
                      name='payment-method'
                      className='h-4 w-4 border-zinc-300 text-red-600'
                      defaultChecked
                    />
                    <label htmlFor='cash-on-delivery' className='ml-2 block text-sm text-zinc-900'>
                      {t('Cash on delivery')}
                    </label>
                  </div>
                </div>
              </div>
              <SubmitButton className='my-12' text={t('PlaceOrder')} />
            </div>
          </div>
        </div>
      </form>
      <div className='mt-1 w-full max-w-md'>
        <ApplyCouponForm />
      </div>
    </div>
  )
}

export default CheckOutForm
