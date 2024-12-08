import { Suspense } from 'react'

import PageContainer from '@/components/layout/admin/page-container'
import { OrderFormSkeleton } from '@/components/skeletons/order-form-skeleton'
import { OrderViewPage } from '@/containers/admin/order-view-page'

type OrderViewProps = {
  params: {
    orderId: string
  }
}

const OrderView: React.FC<OrderViewProps> = ({ params }) => {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<OrderFormSkeleton />}>
          <OrderViewPage orderId={params.orderId} />
        </Suspense>
      </div>
    </PageContainer>
  )
}

export default OrderView
