'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Error } from '@/types'
import { applyCouponFormAction } from './action'
import { SubmitButton } from '@/components/Button'
import { Input } from '@/components/Inputs'
import { cn, getError } from '@/lib/utils'

const CouponForm = () => {
  const t = useTranslations('Form')
  const [errors, setErrors] = useState<Error[]>([])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name))
  }

  return (
    <form
      action={(formData) => applyCouponFormAction({ formData, onChangeErrors: setErrors })}
      className={cn('mb-10 flex h-12 w-full gap-2', errors && 'gap-2')}
    >
      <Input
        type='text'
        name='couponCode'
        id='couponCode'
        placeholder={t('fields.couponCode')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'couponCode')}
      />
      <SubmitButton text={t('buttons.applyCoupon')} className='w-full px-2' />
    </form>
  )
}

export default CouponForm
