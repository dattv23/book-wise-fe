'use client'

import Link from 'next/link'
import { ShoppingCartIcon } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

import { Button } from '@/components/ui/button'
import CartItem from '@/components/shared/cart-item'
import { useCartStore } from '@/store/cart.store'

const CartDrawer: React.FC = () => {
  const { cart } = useCartStore()
  const subTotal = cart.reduce((acc, curr) => acc + +curr.product.info.currentPrice * curr.quantity, 0)
  const shippingCosts = 50000

  return (
    <Drawer>
      <DrawerTrigger aria-label='cart-button'>
        <div className='relative inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'>
          <ShoppingCartIcon />
          {cart.length !== 0 && (
            <span className='absolute -right-2 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white text-black'>
              {cart.length}
            </span>
          )}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        {cart.length === 0 ? (
          <DrawerHeader>
            <DrawerTitle>Giỏ hàng của bạn</DrawerTitle>
            <DrawerDescription>Không có sản phẩm nào trong giỏ hàng</DrawerDescription>
          </DrawerHeader>
        ) : (
          <>
            <DrawerHeader>
              <DrawerTitle>Giỏ hàng của bạn</DrawerTitle>
              {cart.length > 0 && (
                <DrawerDescription>
                  <span>{cart.length} sản phẩm</span>
                  <span> - </span>
                  <span>
                    {cart
                      .reduce((acc, curr) => acc + +curr.product.info.currentPrice * curr.quantity, 0)
                      .toLocaleString('vi-VN')}{' '}
                    đ
                  </span>
                </DrawerDescription>
              )}
            </DrawerHeader>
            <div className='space-y-4 p-4 pb-0'>
              <div className='space-y-4'>
                {cart.map((item, id) => (
                  <CartItem product={item.product} quantity={item.quantity} key={id} />
                ))}
              </div>
              <hr />
              <div>
                <div className='flex justify-between'>
                  <span>Tạm tính</span>
                  <span className='text-primary'>{subTotal.toLocaleString('vi-VN')} đ</span>
                </div>
                <div className='flex justify-between'>
                  <span>Chí phí vận chuyển</span>
                  <span className='text-primary'>{shippingCosts.toLocaleString('vi-VN')} đ</span>
                </div>
              </div>
              <hr />
              <div>
                <div className='flex justify-between font-bold'>
                  <span>Tổng</span>
                  <span className='text-primary'>{(subTotal + shippingCosts).toLocaleString('vi-VN')} đ</span>
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Button>
                <Link href={'/checkout'}>Thanh toán</Link>
              </Button>
              <DrawerClose>Đóng</DrawerClose>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
}

export default CartDrawer
