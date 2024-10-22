import dynamic from 'next/dynamic'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '@/configs'

const SignInPage = dynamic(() => import('@/containers/auth-page/signin-page'))

type SignInProps = {
  params: {
    locale: Locale
  }
}

const SignIn: React.FC<SignInProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <SignInPage />
}

export default SignIn
