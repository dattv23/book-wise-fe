import dynamic from 'next/dynamic'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '@/configs'

const SignUpPage = dynamic(() => import('@/containers/auth-page/signup-page'))

type SignUpProps = {
  params: {
    locale: Locale
  }
}

const SignUp: React.FC<SignUpProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <SignUpPage />
}

export default SignUp
