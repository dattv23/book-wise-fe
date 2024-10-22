'use client'

import { useTranslations } from 'next-intl'

import { CameraIcon, CellPhoneIcon, ComputerIcon, GamepadIcon, HeadphoneIcon, SmartWatchIcon } from '@/components/Icons'
import { cn } from '@/lib/utils'
import { Link, usePathname } from '@/navigation'

const CategoriesSidebar: React.FC = () => {
  const t = useTranslations('CategorySection')
  const pathName = usePathname()

  const categories = [
    { id: 1, name: t('Phone'), slug: 'phone', icon: <CellPhoneIcon /> },
    {
      id: 2,
      name: t('Smart Watch'),
      slug: 'smart-watch',
      icon: <SmartWatchIcon />
    },
    { id: 3, name: t('Camera'), slug: 'camera', icon: <CameraIcon /> },
    { id: 4, name: t('Game Pad'), slug: 'game-pad', icon: <GamepadIcon /> },
    {
      id: 5,
      name: t('Headphone'),
      slug: 'head-phone',
      icon: <HeadphoneIcon />
    },
    { id: 6, name: t('Computer'), slug: 'computer', icon: <ComputerIcon /> }
  ]

  return (
    <section className='flex w-fit flex-col gap-4'>
      {categories.map((item) => (
        <Link
          key={item.id}
          href={`/categories/${item.slug}`}
          className={cn('hover:text-primary', pathName.includes(item.slug) && 'text-secondary')}
        >
          {item.name}
        </Link>
      ))}
    </section>
  )
}

export default CategoriesSidebar
