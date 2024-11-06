import { Review } from '@/@types'
import Pagination from '@/components/shared/pagination'
import RatingStars from '@/components/shared/rating-stars/RatingStars'
import { Button } from '@/components/ui/button'

type ReviewSectionProps = {
  reviews: Review[]
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <section className='mx-14 py-8'>
      {/* Header Section */}
      <div className='mb-8 flex justify-between'>
        <div>
          <h2 className='mb-2 text-2xl font-bold'>Đánh giá của khách hàng</h2>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <span className='text-3xl font-bold'>4.5</span>
              <RatingStars rating={4.5} />
            </div>
            <span className='text-gray-500'>Dựa trên {reviews.length} lượt đánh giá</span>
          </div>
        </div>
        <Button>Viết đánh giá</Button>
      </div>

      {/* Reviews List */}
      <div className='space-y-6'>
        {reviews.map((review) => (
          <div key={review.id} className='border-b border-gray-200 pb-6'>
            <div className='mb-2 flex items-start justify-between'>
              <div>
                <h3 className='mb-1 font-semibold'>{review.user}</h3>
                <RatingStars rating={review.rating} />
              </div>
              <span className='text-sm text-gray-500'>{review.date}</span>
            </div>
            <p className='mt-2 text-gray-700'>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </section>
  )
}

export default ReviewSection
