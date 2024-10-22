import dynamic from 'next/dynamic'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '@/configs'

const ContactPage = dynamic(() => import('@/containers/contact-page'))

type ContactPageProps = {
  params: {
    locale: Locale
  }
}

const Contact: React.FC<ContactPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <ContactPage />
}

export default Contact
