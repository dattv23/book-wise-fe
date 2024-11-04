import Image from 'next/image'
import React from 'react'

type BookCardProps = {
  title: string
  author: string
  image: string
  price: number
}

const BookCard: React.FC<BookCardProps> = ({ author, image, price, title }) => {
  return (
    <div className='flex flex-col items-center gap-2 overflow-hidden rounded-lg border bg-white p-4 shadow-sm'>
      <Image width={300} height={200} src={image} alt={title} className='h-[300px] w-[200px] rounded-md object-fill' />
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className='text-sm text-gray-600'>by {author}</p>
      <div className='flex text-yellow-400'>{'★'.repeat(5)}</div>
      <p className='text-xl font-bold'>{price}₫</p>
    </div>
  )
}

export default BookCard
