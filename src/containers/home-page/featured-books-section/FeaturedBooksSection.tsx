import { Suspense } from 'react'

import { ApiResponse, Product } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'
import ProductGridSkeleton from '@/components/skeletons/product-grid-skeleton'
import { envServerConfig } from '@/lib/envServer'

async function getFeaturedBooksData() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/products`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const FeaturedBooksSection: React.FC = async () => {
  const {
    data: { products: products }
  } = (await getFeaturedBooksData()) as ApiResponse<{ products: Product[] }>

  return (
    <section className='mb-8'>
      <h2 className='text-3xl font-bold'>Những cuốn sách đặc trưng</h2>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid data={products.slice(0, 4)} />
      </Suspense>
    </section>
  )
}

export default FeaturedBooksSection
