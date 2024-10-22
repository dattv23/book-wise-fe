import { useTranslations } from 'next-intl'

import { Category } from '@/types'
import { CameraIcon, CellPhoneIcon, ComputerIcon, GamepadIcon, HeadphoneIcon, SmartWatchIcon } from '@/components/Icons'
import { CategoryList } from '@/components'

interface CategoriesSectionProps {}

const CategoriesSection: React.FC<CategoriesSectionProps> = () => {
  const t = useTranslations('CategorySection')

  const listCategory = [
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
    <section className='my-10 flex flex-col gap-6'>
      <div className='flex items-center gap-2 text-secondary'>
        <div className='relative h-10 w-5'>
          <div className='absolute left-0 top-0 h-10 w-5 rounded bg-secondary'></div>
        </div>
        <p>{t('Categories')}</p>
      </div>
      <div className='flex justify-between gap-20'>
        <div className='flex gap-4'>
          <h3>{t('Browse By Category')}</h3>
        </div>
      </div>
      <div className='flex gap-4'>
        <CategoryList data={listCategory as Category[]} />
      </div>
    </section>
  )
}

export default CategoriesSection
