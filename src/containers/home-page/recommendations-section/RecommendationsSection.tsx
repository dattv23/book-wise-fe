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
  if (token && token.value) {
    res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/recommendations/personalized`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })
  } else {
    res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/recommendations/products/popular`)
  }

  if (!res.ok) {
    return { data: [] }
  }

  return res.json()
}

export const revalidate = 60 * 60 * 24 // 24 hours clock

const RecommendationsSection: React.FC = async () => {
  const response = (await getRecommendations()) as ApiResponse<{ productId: string; score: number; product: Product }[]>
  const products: Product[] = response.data.map((item) => item.product)

  return (
    <section className='mb-8'>
      <h2 className='text-3xl font-bold'>Những đề xuất dành cho bạn</h2>
      {products.length === 0 ? (
        'Chưa có sản phẩm đề xuất phù hợp! Hãy tích cực tương tác để chúng tôi có thể đề xuất những sản phầm phù hợp với bạn!'
      ) : (
        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductGrid data={products} />
        </Suspense>
      )}
    </section>
  )
}

export default RecommendationsSection
