import type { CartItem } from '@/@types'
import { Card } from '@/components/ui/card'

type OrderSummaryProps = {
  cart: CartItem[]
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart }) => {
  const data = cart
  const subTotal = data.reduce((acc, curr) => acc + curr.product.info.currentPrice * curr.quantity, 0)
  const shippingCosts = 50000

  return (
    <Card className='p-4'>
      <h2 className='mb-4 font-semibold capitalize'>Tóm tắt đơn hàng</h2>
      <div className='space-y-2'>
        <div className='flex justify-between'>
          <span className='text-gray-600'>Tạm tính</span>
          <span>{subTotal.toLocaleString('vi-VN')} đ</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-600'>Chi phí vận chuyển</span>
          <span>{shippingCosts.toLocaleString('vi-VN')} đ</span>
        </div>
        <div className='flex justify-between border-t pt-2 font-medium'>
          <span>Tổng tiền (Bao gồm VAT)</span>
          <span className='font-black text-primary'>{(subTotal + shippingCosts).toLocaleString('vi-VN')} đ</span>
        </div>
      </div>
    </Card>
  )
}

export default OrderSummary
