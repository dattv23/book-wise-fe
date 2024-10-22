import dynamic from 'next/dynamic'
import React from 'react'

const ProductListPage = dynamic(() => import('@/containers/product-list-page'))

const ProductList: React.FC = () => {
  return <ProductListPage />
}

export default ProductList
