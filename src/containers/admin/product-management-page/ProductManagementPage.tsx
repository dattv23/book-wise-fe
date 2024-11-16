import Link from 'next/link'
import { Plus } from 'lucide-react'

import { ApiResponse, Category, Product } from '@/@types'
import PageContainer from '@/components/layout/admin/page-container'
import ProductTable from '@/components/tables/product-table'
import { buttonVariants } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { searchParamsCache } from '@/lib/searchParams'
import { cn } from '@/lib/utils'
import { getProducts } from '@/services/product.service'
import { getCategories } from '@/services/category.service'

const ProductManagementPage: React.FC = async () => {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page')
  const search = searchParamsCache.get('q')
  const pageLimit = searchParamsCache.get('limit')
  const categories = searchParamsCache.get('categories')

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(categories && { categories })
  }

  const {
    data: { books, total }
  } = (await getProducts(filters)) as ApiResponse<{ books: Product[]; total: number; totalPages: number }>
  const { data: categoriesData } = (await getCategories()) as ApiResponse<Category[]>

  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title={`Product (${total})`} description='Manage products' />

          <Link href={'/admin/products/new'} className={cn(buttonVariants({ variant: 'default' }))}>
            <Plus className='mr-2 h-4 w-4' /> Add New
          </Link>
        </div>
        <Separator />
        <ProductTable data={books} totalData={total} categories={categoriesData} />
      </div>
    </PageContainer>
  )
}

export default ProductManagementPage
