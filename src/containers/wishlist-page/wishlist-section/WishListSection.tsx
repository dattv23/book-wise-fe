'use client'

import { Button, ProductCard } from '@/components'
import { useWishListStore } from '@/stores/wishList.store'
import { useTranslations } from 'next-intl'

const WishListSection = () => {
  const t = useTranslations('WishListSection')
  const { wishList } = useWishListStore()
  return (
    <section className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <h4>{`${t('Wishlist')} (${wishList.length})`}</h4>
        <Button>{t('Move all to cart')}</Button>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
        {wishList.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  )
}

export default WishListSection
