import { books } from '@/mocks/books'
import dynamic from 'next/dynamic'

const ProductDetailPage = dynamic(() => import('@/containers/product-detail-page'))

const ProductDetail: React.FC = () => {
  return <ProductDetailPage data={books[0]} />
}

export default ProductDetail
