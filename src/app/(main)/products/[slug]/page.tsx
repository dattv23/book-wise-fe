import dynamic from 'next/dynamic'

import { envServerConfig } from '@/lib/envServer'
import { ApiResponse, Product } from '@/@types'
import { notFound } from 'next/navigation'

const ProductDetailPage = dynamic(() => import('@/containers/product-detail-page'))

async function getProductData(slug: string) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books/${slug}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return notFound()
  }

  return res.json()
}

type ProductDetailProp = {
  params: {
    slug: string
  }
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

const ProductDetail: React.FC<ProductDetailProp> = async ({ params, ...props }) => {
  const searchParams = await props.searchParams
  const currentPageReview = Number(searchParams?.page) || 1
  const { data: product } = (await getProductData(params.slug)) as ApiResponse<Product>

  return <ProductDetailPage data={product} currentPageReview={currentPageReview} />
}

export default ProductDetail
