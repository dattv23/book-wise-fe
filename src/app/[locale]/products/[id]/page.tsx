import React, { FC } from 'react'
import { notFound } from 'next/navigation'

import { Product } from '@/types'
import { Locale } from '@/configs'
import { envServerConfig } from '@/lib/envServer'
import ProductDetailPage from '@/containers/product-detail-page'

type ProductDetailProps = {
  params: { id: string; locale: Locale }
}

export async function generateStaticParams() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/products`).then((res) => res.json())

  return res.data.map((product: Product) => ({
    id: product.id
  }))
}

const getData = async (id: string) => {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/products/${id}`).then((res) => res.json())
  if (res.status !== 200) return notFound()
  return res.data as Product
}

const ProductDetail: FC<ProductDetailProps> = async ({ params }) => {
  const product: Product = await getData(params.id)
  return <ProductDetailPage data={product} params={params} />
}

export default ProductDetail
