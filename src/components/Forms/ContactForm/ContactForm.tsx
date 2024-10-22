'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Error } from '@/types'
import { cn, getError } from '@/lib/utils'
import { contactFormAction } from './action'
import { SubmitButton } from '@/components/Button'
import { Input, TextArea } from '@/components/Inputs'

const ContactForm = () => {
  const t = useTranslations('Form')
  const [errors, setErrors] = useState<Error[]>([])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name))
  }
  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setErrors(errors.filter((error) => error.key != e.target.name))
  }

  return (
    <div className='w-full rounded-lg border p-6 shadow-md md:w-3/4'>
      <form
        action={(formData) => contactFormAction({ formData, onChangeErrors: setErrors })}
        className={cn('flex flex-col gap-4')}
      >
        <div className='flex gap-4'>
          <Input
            type='text'
            name='name'
            id='name'
            label={t('fields.yourName')}
            onChange={(e) => handleChangeInput(e)}
            error={getError(errors, 'name')}
          />
          <Input
            type='email'
            name='email'
            id='email'
            label={t('fields.yourEmail')}
            onChange={(e) => handleChangeInput(e)}
            error={getError(errors, 'email')}
          />
          <Input
            type='text'
            name='phone'
            id='phone'
            label={t('fields.yourPhone')}
            onChange={(e) => handleChangeInput(e)}
            error={getError(errors, 'phone')}
          />
        </div>
        <TextArea
          name='message'
          id='message'
          label={t('fields.message')}
          onChange={(e) => handleChangeTextArea(e)}
          error={getError(errors, 'message')}
          rows={8}
          className=''
        />
        <div className='flex items-center justify-end'>
          <SubmitButton text={t('buttons.sendMessage')} />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
