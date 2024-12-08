import { ApiResponse, Order } from '@/@types'
import { OrderForm } from '@/components/forms/order-form'
import { PageTitle } from '@/components/forms/order-form/constants'
import { getOrderById } from '@/services/order.service'
import { notFound } from 'next/navigation'

type OrderViewPageProps = {
  orderId: string
}

const OrderViewPage: React.FC<OrderViewPageProps> = async ({ orderId }) => {
  let order = null
  let pageTitle = PageTitle.add

  if (orderId !== 'new') {
    const resData = (await getOrderById(orderId)) as ApiResponse<Order> | null
    if (!resData) {
      notFound()
    }
    order = resData.data
    pageTitle = PageTitle.edit
  }

  return <OrderForm initialData={order} pageTitle={pageTitle} orderId={order ? order.orderId : ''} />
}

export default OrderViewPage
