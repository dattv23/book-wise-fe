import dynamic from 'next/dynamic'
import { SearchParams } from 'nuqs/server'

import { searchParamsCache } from '@/lib/searchParams'

const ProductManagementPage = dynamic(() => import('@/containers/admin/product-management-page'))

type ProductManagementProps = {
  searchParams: SearchParams
}

const ProductManagement: React.FC<ProductManagementProps> = async ({ searchParams }) => {
  searchParamsCache.parse(searchParams)
  return <ProductManagementPage />
}

export default ProductManagement
