import dynamic from 'next/dynamic'
import { SearchParams } from 'nuqs/server'

import { searchParamsCache } from '@/lib/searchParams'

const OrderManagementPage = dynamic(() => import('@/containers/admin/order-management-page'))

type OrderManagementProps = {
  searchParams: SearchParams
}

const OrderManagement: React.FC<OrderManagementProps> = async ({ searchParams }) => {
  searchParamsCache.parse(searchParams)
  return <OrderManagementPage />
}

export default OrderManagement
