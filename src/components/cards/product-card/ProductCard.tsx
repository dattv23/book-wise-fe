'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { HeartIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'

import { Product } from '@/@types/product.type'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import RatingStars from '@/components/shared/rating-stars'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart.store'
import { useToast } from '@/hooks/use-toast'
import { useFavoriteStore } from '@/store/favorite.store'
import { cn } from '@/lib/utils'

type ProductCardProps = {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    bookId,
    info: { title, imageUrl, author, currentPrice }
  } = product

  const [isHover, setIsHover] = useState<boolean>(false)
  const { addItem, checkIsExist } = useCartStore()
  const { add: addToFavorite, remove: removeFromFavorite, find } = useFavoriteStore()
  const { toast } = useToast()

  const handleAddProductToCart = useCallback(() => {
    if (checkIsExist(product.id)) {
      toast({
        title: 'Thêm sản phẩm vào giỏ hàng',
        description: 'Sản phẩm đã được thêm vào giỏ hàng',
        variant: 'default'
      })
      return
    }
    addItem(product)
    toast({
      title: 'Thêm sản phẩm vào giỏ hàng',
      description: 'Sản phẩm đã được thêm vào giỏ hàng',
      variant: 'default'
    })
  }, [product, checkIsExist, addItem, toast])

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
        <Link href={`/products/${bookId}`}>
          <Image src={imageUrl} width={200} height={300} alt={title} className='rounded-md' />
        </Link>
        {isHover && (
          <div className='absolute right-4 top-4 flex flex-col gap-2'>
            <Link href={`/products/${bookId}`}>
              <Button size={'icon'}>
                <SearchIcon />
              </Button>
            </Link>
            <Button size={'icon'} onClick={handleAddProductToCart}>
              <ShoppingCartIcon />
            </Button>
            <Button size={'icon'} onClick={handleAddToFavorite}>
              <HeartIcon className={cn(find(product.id) && 'fill-red-400 text-red-400')} />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className='text-center'>
        <CardTitle className='text-xl font-bold'>{title}</CardTitle>
        <CardDescription className='flex flex-col items-center gap-2'>
          <span>by {author}</span>
          <RatingStars rating={5} />
          <span className='text-sm text-gray-600'>{currentPrice.toLocaleString('vi-VN')} đ</span>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ProductCard
