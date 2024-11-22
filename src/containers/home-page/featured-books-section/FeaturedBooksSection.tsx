import { Suspense } from 'react'

import { ApiResponse, Product } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'
import ProductGridSkeleton from '@/components/skeletons/product-grid-skeleton'
import { envServerConfig } from '@/lib/envServer'

async function getFeaturedBooksData() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const FeaturedBooksSection: React.FC = async () => {
  const {
    data: { books: products }
  } = (await getFeaturedBooksData()) as ApiResponse<{ books: Product[] }>

  return (
    <section>
      <h2 className='mb-8 text-3xl font-bold'>Featured Books</h2>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid data={products.slice(0, 4)} />
      </Suspense>
    </section>
  )
}

export default FeaturedBooksSection
