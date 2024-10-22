import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import { useTranslations } from 'next-intl'

const RegisterForm = dynamic(() => import('@/components/Forms/RegisterForm'), {
  ssr: false
})

const SignUpPage: React.FC = () => {
  const t = useTranslations('SignUpPage')
  return (
    <main className='flex gap-4 py-2 lg:py-8'>
      <div className='flex items-start justify-center lg:flex-[0.8]'>
        <Image
          src={'/images/shopping.jpg'}
          alt='shopping'
          width={919}
          height={800}
          loading='lazy'
          className='h-auto w-min object-cover'
        />
      </div>
      <div className='flex flex-col gap-2 py-2 lg:flex-[0.5] lg:py-4'>
        <h3>{t('Create an account')}</h3>
        <p>{t('Enter your details below')}</p>
        <Suspense fallback={<p>Loading...</p>}>
          <RegisterForm />
        </Suspense>
      </div>
    </main>
  )
}

export default SignUpPage
