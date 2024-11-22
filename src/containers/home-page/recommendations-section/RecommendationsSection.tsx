import { Suspense } from 'react'
import { cookies } from 'next/headers'

import { ApiResponse, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'

import ProductGrid from '@/components/grids/product-grid'
import ProductGridSkeleton from '@/components/skeletons/product-grid-skeleton'

async function getRecommendations() {
  const cookieStore = cookies()
  const token = cookieStore.get('access_token')

  let res
  if (token) {
    res = await fetch(`${envServerConfig.DOMAIN_API}/recommendations`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
  } else {
    res = await fetch(`${envServerConfig.DOMAIN_API}/books/top-selling`)
  }

  if (!res.ok) {
    return { data: [] }
  }

  return res.json()
}

export const revalidate = 60 * 60 * 24 // 24 hours clock

const RecommendationsSection: React.FC = async () => {
  const { data: products } = (await getRecommendations()) as ApiResponse<Product[]>

  return (
    <section>
      <h2 className='mb-8 text-3xl font-bold'>Recommended for you</h2>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid data={products} />
      </Suspense>
    </section>
  )
}

export default RecommendationsSection
