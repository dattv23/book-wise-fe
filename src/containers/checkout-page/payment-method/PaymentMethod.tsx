'use client'
import { Card } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { HandCoinsIcon, WalletIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const PaymentMethod: React.FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()
  const paymentMethod = searchParams.get('paymentMethod') ?? ''

  // Update query parameter 'paymentMethod' when change the payment method
  const handleChangeMethod = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('paymentMethod', value)
    router.push(pathName + '?' + params.toString())
  }
  return (
    <Card className='p-4'>
      <h2 className='mb-4 font-semibold'>Phương thức thanh toán</h2>
      <RadioGroup defaultValue={paymentMethod} onValueChange={handleChangeMethod} className='space-y-3'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='COD' id='cod' />
          <label htmlFor='cod' className='flex items-center gap-2'>
            <HandCoinsIcon className='h-5 w-5' />
            <span>Tiền mặt</span>
          </label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='VN_PAY' id='vn-pay' />
          <label htmlFor='vn-pay' className='flex items-center gap-2'>
            <WalletIcon className='h-5 w-5' />
            <span>Ví điện tử</span>
          </label>
        </div>
      </RadioGroup>
    </Card>
  )
}

export default PaymentMethod
