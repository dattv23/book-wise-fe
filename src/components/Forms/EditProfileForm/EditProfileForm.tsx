'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Error } from '@/types'
import { cn, getError } from '@/lib/utils'
import { Input } from '@/components/Inputs'
import { editProfileFormAction } from './action'
import { Button, SubmitButton } from '@/components/Button'

const EditProfileForm = () => {
  const t = useTranslations('Form')
  const [errors, setErrors] = useState<Error[]>([])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name))
  }

  return (
    <form
      action={(formData) => editProfileFormAction({ formData, onChangeErrors: setErrors })}
      className={cn('mb-10 flex w-full flex-1 flex-col gap-4', errors && 'gap-2')}
    >
      <div className='flex w-full flex-col gap-2 lg:flex-row'>
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
      </div>
      <div className='flex w-full flex-col gap-2 lg:flex-row'>
        <Input
          type='text'
          name='email'
          id='email'
          label={t('fields.email')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'email')}
        />
        <Input
          type='text'
          name='address'
          id='address'
          label={t('fields.address')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'address')}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Input
          type='password'
          name='currentPassword'
          id='currentPassword'
          label={t('fields.currentPassword')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'currentPassword"')}
        />
        <Input
          type='password'
          name='newPassword'
          id='newPassword'
          label={t('fields.newPassword')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'newPassword"')}
        />
        <Input
          type='password'
          name='confirmNewPassword'
          id='confirmNewPassword'
          label={t('fields.confirmNewPassword')}
          onChange={(e) => handleChangeInput(e)}
          error={getError(errors, 'confirmNewPassword"')}
        />
      </div>
      <div className='mt-2 flex justify-end gap-2'>
        <Button className='bg-white text-black'>{t('buttons.cancel')}</Button>
        <SubmitButton text={t('buttons.save')} />
      </div>
    </form>
  )
}

export default EditProfileForm
