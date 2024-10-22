import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

import { locales } from '@/configs'
import dynamic from 'next/dynamic'

const LocaleSwitcherSelect = dynamic(() => import('@/components/Select/LocaleSwitcherSelect'), { ssr: false })

const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  return (
    <>
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        {locales.map((cur) => (
          <option key={cur} value={cur} className='rounded-none bg-slate-400 px-4 py-2 text-white hover:bg-secondary'>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </>
  )
}

export default LocaleSwitcher
