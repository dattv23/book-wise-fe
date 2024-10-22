import { useTranslations } from 'next-intl'

import { Button } from '@/components'
import { Link } from '@/navigation'

const NotFound = () => {
  const t = useTranslations('NotFoundPage')
  return (
    <main className='my-20 flex flex-col items-center justify-center gap-10'>
      <h1>404 Not Found</h1>
      <p>{t('Description')}</p>
      <Button>
        <Link href={'/'}>{t('Back to home page')}</Link>
      </Button>
    </main>
  )
}

export default NotFound
