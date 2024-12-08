import Link from 'next/link'
import { Plus } from 'lucide-react'

import { ApiResponse, Order } from '@/@types'
import PageContainer from '@/components/layout/admin/page-container'
import OrderTable from '@/components/tables/order-table'
import { buttonVariants } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { searchParamsCache } from '@/lib/searchParams'
import { cn } from '@/lib/utils'
import { getOrders } from '@/services/order.service'

const OrderManagementPage: React.FC = async () => {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page')
  const search = searchParamsCache.get('q')
  const pageLimit = searchParamsCache.get('limit')

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search })
  }

  const {
    data: { orders, total }
  } = (await getOrders(filters)) as ApiResponse<{ orders: Order[]; total: number; totalPages: number }>

  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title={`Order (${total})`} description='Manage orders' />

          <Link href={'/admin/orders/new'} className={cn(buttonVariants({ variant: 'default' }))}>
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <OrderTable data={orders} totalData={total} />
      </div>
    </PageContainer>
  )
}

export default OrderManagementPage
