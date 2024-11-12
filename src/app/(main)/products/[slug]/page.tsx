import dynamic from 'next/dynamic'

import { envServerConfig } from '@/lib/envServer'
import { ApiResponse, Product, Review } from '@/@types'

const ProductDetailPage = dynamic(() => import('@/containers/product-detail-page'))

async function getProductData(slug: string) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books/${slug}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getReviews(slug: string) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/reviews?bookId=${slug}`, { cache: 'no-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return { data: [] }
  }

  return res.json()
}

type ProductDetailProp = {
  params: {
    slug: string
  }
}

const ProductDetail: React.FC<ProductDetailProp> = async ({ params }) => {
  const { data: product } = (await getProductData(params.slug)) as ApiResponse<Product>
  const { data: reviews } = (await getReviews(params.slug)) as ApiResponse<Review[]>

  return <ProductDetailPage data={product} reviews={reviews} />
}

export default ProductDetail
