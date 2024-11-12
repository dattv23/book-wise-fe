'use client'

import Image from 'next/image'
import { Heart, Minus, Plus, Trash2 } from 'lucide-react'

import { Product } from '@/@types'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart.store'
import { toast } from '@/hooks/use-toast'

type CartItemProps = {
  product: Product
  quantity: number
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
  const { info } = product
  const { removeItem, updateQuantity } = useCartStore()

  const handleDecrease = () => {
    if (quantity < 1) {
      toast({
        title: 'Số lượng sản phẩm phải lớn hơn 0!',
        variant: 'destructive'
      })
      return
    }
    updateQuantity(product.id, quantity - 1)
  }

  const handleIncrease = () => {
    if (quantity > 999) {
      toast({
        title: 'Số lượng sản phẩm phải nhỏ hơn 1000!',
        variant: 'destructive'
      })
      return
    }
    updateQuantity(product.id, quantity + 1)
  }

  return (
    <div className='flex gap-3'>
      <Image width={80} height={64} src={info.imageUrl} alt={info.title} className='h-16 w-20 rounded object-cover' />
      <div className='flex-1'>
        <div className='flex justify-between'>
          <div>
            <h3 className='font-medium'>{info.title}</h3>
          </div>
          <p className='font-medium text-primary'>{(+info.currentPrice).toLocaleString('vi-VN')} đ</p>
        </div>
        <div className='mt-2 flex items-center justify-between'>
          <div className='space-x-2'>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <Heart size={16} />
            </Button>
            <Button variant='ghost' size='icon' className='h-8 w-8' onClick={() => removeItem(product.id)}>
              <Trash2 size={16} />
            </Button>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='icon' className='h-8 w-8' onClick={handleDecrease}>
              <Minus size={16} />
            </Button>
            <span className='text-primary'>{quantity}</span>
            <Button variant='outline' size='icon' className='h-8 w-8' onClick={handleIncrease}>
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
