'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Error } from '@/types'
import { Link } from '@/navigation'
import { cn, getError } from '@/lib/utils'
import { registerFormAction } from './action'
import { Input } from '@/components/Inputs'
import { SubmitButton } from '@/components/Button'

const RegisterForm = () => {
  const t = useTranslations('Form')
  const [errors, setErrors] = useState<Error[]>([])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key !== e.target.name))
  }

  return (
    <form
      action={(formData) => registerFormAction({ formData, onChangeErrors: setErrors })}
      className={cn('mb-10 flex w-full flex-col gap-4', errors && 'gap-2')}
    >
      <Input
        type='text'
        name='firstName'
        id='firstName'
        label={t('fields.firstName')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'firstName')}
      />
      <Input
        type='text'
        name='lastName'
        id='lastName'
        label={t('fields.lastName')}
        onChange={(e) => handleChangeInput(e)}
        error={getError(errors, 'lastName')}
      />
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
      <div className='flex w-full flex-col gap-4'>
        <SubmitButton text={t('buttons.createAccount')} />
      </div>
      <div className='flex justify-center'>
        <p className='mr-3'>{`${t('texts.questionLogin')}`}</p>
        <Link href={'/auth/sign-in'} className='text-error hover:opacity-80'>
          {t('buttons.logIn')}
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
