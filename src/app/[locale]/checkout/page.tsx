import dynamic from 'next/dynamic'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '@/configs'

const CheckOutPage = dynamic(() => import('@/containers/checkout-page'))

type CheckOutPageProps = {
  params: {
    locale: Locale
  }
}

const CheckOut: React.FC<CheckOutPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <CheckOutPage />
}

export default CheckOut
