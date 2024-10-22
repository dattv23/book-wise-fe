import { getTranslations } from 'next-intl/server'
import React from 'react'

import { CheckOutForm } from '@/components'

const CheckOutPage: React.FC = async () => {
  const t = await getTranslations('CheckOutPage')

  return (
    <main className='mx-10 mb-6 max-w-7xl p-6'>
      <h1 className='mb-6 text-2xl font-bold'>{t('Billing Details')}</h1>
      <div>
        <CheckOutForm />
      </div>
    </main>
  )
}

export default CheckOutPage
