import { useTranslations } from 'next-intl'
import React from 'react'

import { PhoneIcon } from '@/components/Icons'
import { MailIcon } from '@/components/Icons'
import { ContactForm } from '@/components'
interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  const t = useTranslations('ContactPage')
  return (
    <main className='container mx-auto mb-6 p-20'>
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='w-full rounded-lg border p-6 shadow-md md:w-1/2'>
          <div className='mb-4 items-start'>
            <div className='flex items-center'>
              <PhoneIcon className='mr-4 items-start' />
              <h2 className='text-xl  font-semibold'>{t('Call To Us')}</h2>
            </div>
            <div className='mt-2 flex flex-col gap-4'>
              <p className='mt-1'>{t('Description')}</p>
              <p>{t('Phone')}</p>
            </div>
          </div>
          <hr className='my-8' />
          <div className='mb-6 items-start'>
            <div className='flex items-center'>
              <MailIcon className='mr-4' />
              <h2 className='text-xl font-semibold'>{t('Write To Us')}</h2>
            </div>
            <div className='mt-2 flex flex-col gap-4'>
              <p className='mt-1'>{t('Fill out our form we will contact you within 24 hours')}</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage
