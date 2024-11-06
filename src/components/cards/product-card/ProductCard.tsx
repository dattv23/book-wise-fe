'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { HeartIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'

import { renderStar } from '@/lib/utils'
import { Book } from '@/@types/book.type'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type ProductCardProps = {
  book: Book
}

const ActionGroup: React.FC = () => {
  return (
    <>
      <Button size={'icon'}>
        <SearchIcon />
      </Button>
      <Button size={'icon'}>
        <ShoppingCartIcon />
      </Button>
      <Button size={'icon'}>
        <HeartIcon />
      </Button>
    </>
  )
}

const ProductCard: React.FC<ProductCardProps> = ({ book }) => {
  const { id, title, author, imageUrl, price, rating } = book

  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <Card onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <CardHeader className='relative flex items-center'>
        <Link href={`/products/${id}`}>
          <Image src={imageUrl} width={200} height={300} alt={title} className='rounded-md' />
        </Link>
        {isHover && (
          <div className='absolute right-4 top-4 flex flex-col gap-2'>
            <ActionGroup />
          </div>
        )}
      </CardHeader>
      <CardContent className='text-center'>
        <CardTitle className='text-xl font-bold'>{title}</CardTitle>
        <CardDescription className='flex flex-col items-center gap-2'>
          <span>by {author}</span>
          <span className='flex gap-2'>{renderStar(rating)}</span>
          <span className='text-sm text-gray-600'>{price} VND</span>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ProductCard
