'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Error } from '@/types'
import { Link } from '@/navigation'
import { cn, getError } from '@/lib/utils'
import { loginFormAction } from './action'
import Input from '@/components/Inputs/Input'
import { SubmitButton } from '@/components/Button'

const LoginForm = () => {
  const t = useTranslations('Form')
  const [errors, setErrors] = useState<Error[]>([])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name))
  }

  return (
    <form
      action={(formData) => loginFormAction({ formData, onChangeErrors: setErrors })}
      className={cn('mb-10 flex w-full flex-col gap-4', errors && 'gap-2')}
    >
      <Input
        type='text'
        name='email'
        id='email'
        label={t('fields.email')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'email')}
      />
      <Input
        type='password'
        name='password'
        id='password'
        label={t('fields.password')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'password')}
      />
      <div className='mt-4 flex items-center justify-between'>
        <SubmitButton text={t('buttons.logIn')} />
        <Link href={'/auth/forgot-password'} className='text-error hover:opacity-80'>
          {`${t('links.forgotPassword')}`}
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
