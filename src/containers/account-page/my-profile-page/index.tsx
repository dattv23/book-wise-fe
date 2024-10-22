import { useTranslations } from 'next-intl'

import { EditProfileForm } from '@/components'

const MyProfilePage = () => {
  const t = useTranslations('MyProfilePage')
  return (
    <main className='px-20 py-10 shadow-md'>
      <h4 className='mb-4 text-secondary'>{t('Edit your profile')}</h4>
      <EditProfileForm />
    </main>
  )
}

export default MyProfilePage
