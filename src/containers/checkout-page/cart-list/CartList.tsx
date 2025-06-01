'use client'

import dynamic from 'next/dynamic'
import { useCartStore } from '@/store/cart.store'
const OrderSummary = dynamic(() => import('../order-summary'))
const CartItem = dynamic(() => import('@/components/shared/cart-item'))

export default function CartList() {
  const { cart } = useCartStore()
  return (
    <div className='space-y-4 rounded-lg bg-[#f4f3f8] p-6'>
      {cart.map((item) => (
        <CartItem product={item.product} quantity={item.quantity} key={item.product.id} />
      ))}
      <br />
      <hr />
      <OrderSummary cart={cart} />
    </div>
  )
}
