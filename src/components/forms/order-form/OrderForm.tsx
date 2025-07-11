'use client'

import { Order, OrderStatus, PaymentMethod } from '@/@types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { PageTitle } from './constants'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { createOrder, updateOrder } from '@/server-actions/order.action'
import { orderSchema } from '@/validations/order.validation'
import { useAuthStore } from '@/store/auth.store'

type OrderFormProps = {
  initialData: Order | null
  pageTitle: string
  orderId: string
}

const OrderForm: React.FC<OrderFormProps> = ({ initialData, pageTitle, orderId }) => {
  const { user } = useAuthStore()
  const defaultValues = useMemo(
    () => ({
      items: initialData?.items || [],
      status: initialData?.status || OrderStatus.PENDING,
      userId: user?.id || '',
      subTotal: initialData?.subTotal || 0,
      shippingCost: initialData?.shippingCost || 0,
      total: initialData?.total || 0,
      address: initialData?.address || '',
      phoneNumber: initialData?.phoneNumber || '',
      paymentMethod: initialData?.paymentMethod || PaymentMethod.COD
    }),
    [initialData, user]
  )

  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    values: defaultValues
  })

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values: z.infer<typeof orderSchema>) => {
    setIsLoading(true)
    try {
      let result
      if (pageTitle === PageTitle.add) {
        result = await createOrder(values)
      } else {
        result = await updateOrder(values, orderId)
      }
      if (!result.success) {
        toast.error(result.error || 'Đã có lỗi hệ thống!')
        return
      }
      toast.success(`${pageTitle} thành công!`)
      router.push('/admin/orders')
      router.refresh()
    } catch {
      toast.error('Đã có lỗi hệ thống!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>{pageTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <Button type='submit' className='w-full' disabled={isLoading}>
              Gởi
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default OrderForm
