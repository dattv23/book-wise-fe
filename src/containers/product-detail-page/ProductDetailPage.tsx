import { Book } from '@/@types/book.type'

import HeroSection from '@/components/shared/hero-section'
import InfoSection from './info-section'
import ReviewSection from './review-section'
import { reviews } from '@/mocks/reviews'

type ProductDetailPageProps = {
  data: Book
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ data }) => {
  return (
    <main>
      <HeroSection subtitle='Tất cả những cuốn sách yêu thích của bạn ở một nơi 📚' title={data.title} />
      <InfoSection {...data} />
      <hr className='mx-14' />
      <ReviewSection reviews={reviews} />
    </main>
  )
}

export default ProductDetailPage
