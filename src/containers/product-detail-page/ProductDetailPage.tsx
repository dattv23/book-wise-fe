import { Book } from '@/@types/book.type'

import HeroSection from '@/components/shared/hero-section'
import InfoSection from './info-section'
import ReviewSection from './review-section'
import { Review } from '@/@types'

type ProductDetailPageProps = {
  data: Book
  reviews: Review[]
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ data, reviews }) => {
  return (
    <main>
      <HeroSection subtitle='Tất cả những cuốn sách yêu thích của bạn ở một nơi 📚' title={data.info.title} />
      <InfoSection {...data} />
      <hr className='mx-4 md:mx-14' />
      <ReviewSection reviews={reviews} />
    </main>
  )
}

export default ProductDetailPage
