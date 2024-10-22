'use client'

import { message } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

import { Button } from '@/components/Button'
import { PRODUCT_STATUS, Product } from '@/types'
import { ProductDetailModal } from '@/components/Modal'
import { EyeIcon, HeartSmallIcon } from '@/components/Icons'
import { calculateDiscountedPrice, cn, convertPriceByLocale } from '@/lib/utils'
import { Locale } from '@/configs'
import { useRouter } from '@/navigation'
import { useAuthStore, useCartStore } from '@/stores'
import { useWishListStore } from '@/stores/wishList.store'

interface ProductCardProps {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const params = useParams()
  const t = useTranslations('ProductCard')
  const { isAuth } = useAuthStore()
  const { add: addCart } = useCartStore()
  const { wishList, add: addWishList, remove, find } = useWishListStore()
  const router = useRouter()

  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [modalDetailOpen, setModalDetailOpen] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleAddCart = async () => {
    if (!isAuth) {
      message.info(t('Please login to add cart'))
      router.push('/auth/sign-in')
    }
    const token = localStorage.getItem('accessToken')
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_DOMAIN_API}/api/v1/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        productId: data.id,
        quantity: 1
      })
    })
    if (res.status !== 200) {
      return {
        error: 'Add cart failed'
      }
    }
    addCart(data)
    message.success(t('Added cart successfully'))
  }

  return (
    <>
      <div
        className='flex cursor-pointer flex-col gap-4 rounded-md'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9'>
          <div className='absolute left-2 top-2 flex flex-col gap-2'>
            {data.status === PRODUCT_STATUS.NEW && (
              <div className='rounded-md bg-success px-3 py-1 text-center text-sm text-white'>{t('NEW')}</div>
            )}
            {data.discount > 0 && (
              <div className='rounded-md bg-secondary px-3 py-1 text-sm text-white'>{`-${data.discount}%`}</div>
            )}
          </div>
          <Image
            src={data.imageUrl}
            width={172}
            height={152}
            alt='product-image'
            className='h-[152px] w-auto'
            onClick={() => router.push(`/products/${data.id}`)}
          />
          <div className='absolute right-2 top-2 flex flex-col gap-2'>
            {isAuth && (
              <Button
                className={cn('rounded-full bg-white p-2 hover:bg-secondary')}
                onClick={() => (find(data.id, wishList) ? remove(data.id) : addWishList(data))}
              >
                <HeartSmallIcon color={`${find(data.id, wishList) ? 'red' : 'white'}`} />
              </Button>
            )}
            <Button className='rounded-full bg-white p-2 hover:bg-secondary' onClick={() => setModalDetailOpen(true)}>
              <EyeIcon />
            </Button>
          </div>
          {isHovered && (
            <Button
              onClick={handleAddCart}
              className='absolute bottom-0 left-0 right-0 bg-black py-2 text-center text-white hover:text-secondary hover:opacity-100'
            >
              {t('Add To Cart')}
            </Button>
          )}
        </div>
        <div>
          <h4>{data.name}</h4>
          <p className={`${data.discount && 'text-secondary'}`}>
            <span>
              {`${t('Price')}: ${convertPriceByLocale(calculateDiscountedPrice(data.regularPrice, data?.discount ?? 0), params.locale as Locale)}`}
            </span>
            {data.discount && data?.discount !== 0 && (
              <span className='text-[#cccc] line-through'>
                {convertPriceByLocale(data.regularPrice, params.locale as Locale)}
              </span>
            )}
          </p>
          {/* {data.rate && data.number_of_rate !== 0 && (
            <p>
              {startScore(data.rate)} ({data.number_of_rate})
            </p>
          )} */}
        </div>
      </div>
      <ProductDetailModal
        key={data.id}
        data={data}
        isOpen={modalDetailOpen}
        onClose={() => setModalDetailOpen(false)}
        locale={params.locale as Locale}
      />
    </>
  )
}

export default ProductCard
