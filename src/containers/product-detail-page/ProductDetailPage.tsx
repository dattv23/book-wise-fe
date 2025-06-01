import dynamic from 'next/dynamic'

import { Product } from '@/@types/product.type'

const HeroSection = dynamic(() => import('@/components/shared/hero-section'))
const InfoSection = dynamic(() => import('./info-section'))
const ReviewSection = dynamic(() => import('./review-section'))

type ProductDetailPageProps = {
  data: Product
  currentPageReview: number
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ data, currentPageReview }) => {
  return (
    <main>
      <HeroSection subtitle='Tất cả những cuốn sách yêu thích của bạn ở một nơi 📚' title={data.name} />
      <InfoSection {...data} />
      <hr className='mx-4 md:mx-14' />
      <ReviewSection bookId={data.id} currentPageReview={currentPageReview} />
    </main>
  )
}

export default ProductDetailPage
