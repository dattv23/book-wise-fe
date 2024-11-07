import Image from 'next/image'
import { Heart, Minus, Plus, Trash2 } from 'lucide-react'

import { Book } from '@/@types'
import { Button } from '@/components/ui/button'

type CartItemProps = {
  book: Book
  quantity: number
}

const CartItem: React.FC<CartItemProps> = ({ book, quantity }) => {
  return (
    <div className='flex gap-3'>
      <Image width={80} height={64} src={book.imageUrl} alt={book.title} className='h-16 w-20 rounded object-cover' />
      <div className='flex-1'>
        <div className='flex justify-between'>
          <div>
            <h3 className='font-medium'>{book.title}</h3>
          </div>
          <p className='font-medium text-primary'>{(book.price * quantity).toLocaleString('vi-VN')} đ</p>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <div className='space-x-2'>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <Heart size={16} />
            </Button>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <Trash2 size={16} />
            </Button>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='icon' className='h-8 w-8'>
              <Minus size={16} />
            </Button>
            <span className='text-primary'>{quantity}</span>
            <Button variant='outline' size='icon' className='h-8 w-8'>
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
