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
import { cart } from '@/mocks/cart'

const CartButton: React.FC = () => {
  const data = cart
  const subTotal = data.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
  const shippingCosts = 50000

  return (
    <Drawer>
      <DrawerTrigger>
        <Button size={'icon'}>
          <ShoppingCartIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Giỏ hàng của bạn</DrawerTitle>
          {data.length === 0 && <DrawerDescription>Không có sản phẩm nào trong giỏ hàng</DrawerDescription>}
          {data.length > 0 && (
            <DrawerDescription>
              {data.length} sản phẩm - {data.reduce((acc, curr) => acc + curr.product.price, 0).toLocaleString('vi-VN')}{' '}
              đ
            </DrawerDescription>
          )}
        </DrawerHeader>
        <div className='space-y-4 p-4 pb-0'>
          <div className='space-y-4'>
            {data.map((item) => (
              <CartItem book={item.product} quantity={item.quantity} key={item.id} />
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
          <Button>Thanh toán</Button>
          <DrawerClose>
            <Button variant='outline' className='w-full'>
              Đóng
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CartButton
