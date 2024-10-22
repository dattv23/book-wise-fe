import dynamic from 'next/dynamic'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Locale } from '@/configs'

const AboutPage = dynamic(() => import('@/containers/about-page'))

type AboutPageProps = {
  params: {
    locale: Locale
  }
}

const About: React.FC<AboutPageProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <AboutPage />
}

export default About
