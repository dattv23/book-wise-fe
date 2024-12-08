'use client'

import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

import { PaymentMethod } from '@/@types'
import { useCartStore } from '@/store/cart.store'
import { createOrder } from '@/server-actions/order.action'
import { useShippingInfoStore } from '@/store/shipping.store'
import { useToast } from '@/hooks/use-toast'

export default function OrderButton() {
  const { toast } = useToast()
  const router = useRouter()
  const { cart, removeAll } = useCartStore()
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
    const order = {
      items,
      subTotal,
      shippingCost,
      total: subTotal + shippingCost,
      address,
      phoneNumber,
      paymentMethod
    }
    const { success, data } = await createOrder(order)
    if (!success) {
      toast({
        title: 'Đặt hàng thất bại',
        description: 'Đã có lỗi hệ thống! Quý khách vui lòng liên hệ ADMIN để hỗ trợ!',
        variant: 'destructive'
      })
      return
    }
    if (typeof data == 'string') {
      router.push(data)
      return
    }
    toast({
      title: 'Đặt hàng thành công',
      description: 'Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ!',
      variant: 'default'
    })
    removeAll()
    router.push('/')
  }
  return (
    <Button className='w-full' size='lg' onClick={handleOrder}>
      Đặt hàng
    </Button>
  )
}
