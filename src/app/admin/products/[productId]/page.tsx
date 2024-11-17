import PageContainer from '@/components/layout/admin/page-container'
import ProductFormSkeleton from '@/components/skeletons/product-form-skeleton'
import ProductViewPage from '@/containers/admin/product-view-page'
import { Suspense } from 'react'

type ProductViewProps = {
  params: {
    productId: string
  }
}

const ProductView: React.FC<ProductViewProps> = ({ params }) => {
  return (
    <PageContainer scrollable>
      <div className='flex-1 space-y-4'>
        <Suspense fallback={<ProductFormSkeleton />}>
          <ProductViewPage productId={params.productId} />
        </Suspense>
      </div>
    </PageContainer>
  )
}

export default ProductView
