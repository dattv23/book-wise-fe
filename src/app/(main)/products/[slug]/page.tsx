import dynamic from 'next/dynamic'

const ProductDetailPage = dynamic(() => import('@/containers/product-detail-page'))

const ProductDetail: React.FC = () => {
  return <ProductDetailPage />
}

export default ProductDetail
