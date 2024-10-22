import { unstable_setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'

import { Locale } from '@/configs'
const MyProfilePage = dynamic(() => import('@/containers/account-page/my-profile-page'))

type MyProfileProps = {
  params: {
    locale: Locale
  }
}

const MyProfile: React.FC<MyProfileProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <MyProfilePage />
}

export default MyProfile
