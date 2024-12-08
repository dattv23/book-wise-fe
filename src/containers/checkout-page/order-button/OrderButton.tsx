'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart.store'
import { useShippingInfoStore } from '@/store/shipping.store'
import { createOrder } from '@/server-actions/order.action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { PaymentMethod } from '@/@types'

export default function OrderButton() {
  const router = useRouter()
  const { cart } = useCartStore()
  const items = cart.map((c) => ({
    bookId: c.product.bookId,
    quantity: c.quantity
  }))
  const { address, phoneNumber } = useShippingInfoStore()
  const searchParams = useSearchParams()
  const paymentMethod = (() => {
    const method = searchParams.get('paymentMethod')
    if (method === 'VN_PAY') return PaymentMethod.VN_PAY
    return PaymentMethod.COD
  })()
  const shippingCost = 50000
  const subTotal = cart.reduce((acc, curr) => acc + curr.product.info.currentPrice * curr.quantity, 0)
  const handleOrder = async () => {
    try {
      const order = {
        items,
        subTotal,
        shippingCost,
        total: subTotal + shippingCost,
        address,
        phoneNumber,
        paymentMethod
      }
      const result = await createOrder(order)
      if (!result.success) {
        toast.error(result.error || 'Đã có lỗi hệ thống!')
        return
      }
      toast.success(`Đặt hàng thành công!`)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Button className='w-full' size='lg' onClick={handleOrder}>
      Đặt hàng
    </Button>
  )
}
