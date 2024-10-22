import { useTranslations } from 'next-intl'

import LocaleSwitcher from '../LocaleSwitcher'
import { Link } from '@/navigation'

const TopHeader = () => {
  const t = useTranslations('TopHeader')

  return (
    <div className='flex w-full flex-col items-end bg-black px-4 text-white md:flex-row md:items-center md:justify-between lg:px-36'>
      <div className='hidden w-full justify-center gap-2 font-light md:flex md:flex-row'>
        <p>{t('Summer Sale For All Headphone And Free Express Delivery - OFF 50%!')}</p>
        <Link href={'/products'} className='font-semibold'>
          {t('Shop now')}
        </Link>
      </div>
      <LocaleSwitcher />
    </div>
  )
}

export default TopHeader
