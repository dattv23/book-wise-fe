'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { HeartIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'

import { Product } from '@/@types/product.type'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import RatingStars from '@/components/shared/rating-stars'
import { Button } from '@/components/ui/button'
import { useFavoriteStore } from '@/store/favorite.store'
import { cn } from '@/lib/utils'
import CartButton from '@/components/shared/cart-button'

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, thumbnailUrl, name, authors, originalPrice } = product

  const [isHover, setIsHover] = useState<boolean>(false)
  const { add: addToFavorite, remove: removeFromFavorite, find } = useFavoriteStore()

  const handleAddToFavorite = () => {
    const checkIsExist = find(product.id)
    if (!checkIsExist) {
      addToFavorite(product)
      return
    }
    removeFromFavorite(product.id)
  }

  return (
    <Card onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <CardHeader className='relative flex items-center'>
        <Link href={`/products/${id}`}>
          <Image src={thumbnailUrl} width={200} height={250} alt={name} className='h-[250px] rounded-md' />
        </Link>
        {isHover && (
          <div className='absolute right-4 top-4 flex flex-col gap-2'>
            <Link href={`/products/${id}`}>
              <Button size={'icon'}>
                <SearchIcon />
              </Button>
            </Link>
            <CartButton size={'icon'} product={product}>
              <ShoppingCartIcon />
            </CartButton>
            <Button size={'icon'} onClick={handleAddToFavorite}>
              <HeartIcon className={cn(find(product.id) && 'fill-red-400 text-red-400')} />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className='text-center'>
        <CardTitle className='text-xl font-bold'>{name}</CardTitle>
        <CardDescription className='flex flex-col items-center gap-2'>
          <span>by {authors ? authors[0].author.name : 'None'}</span>
          <RatingStars rating={5} />
          <span className='text-xl text-gray-600'>{originalPrice.toLocaleString('vi-VN')} đ</span>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ProductCard
