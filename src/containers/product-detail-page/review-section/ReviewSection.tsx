import { ApiResponse, Review } from '@/@types'

import { convertDateFormat } from '@/lib/helpers'
import { envServerConfig } from '@/lib/envServer'

import ReviewDialog from '@/components/dialogs/review-dialog'
import RatingStars from '@/components/shared/rating-stars/RatingStars'
import Pagination from '@/components/shared/pagination'
import ExpandableText from '@/components/shared/expandable-text'

type ReviewSectionProps = {
  bookId: string
  currentPageReview: number
}

async function getReviews(bookId: string, page: number) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/reviews?bookId=${bookId}&page=${page}`, { cache: 'no-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return { data: [] }
  }

  return res.json()
}

const ReviewSection: React.FC<ReviewSectionProps> = async ({ bookId, currentPageReview }) => {
  const {
    data: { reviews, total, average, totalPages }
  } = (await getReviews(bookId, currentPageReview)) as ApiResponse<{
    reviews: Review[]
    total: number
    average: number
    totalPages: number
  }>

  return (
    <section className='mx-4 space-y-4 py-8 md:mx-14'>
      {/* Header Section */}
      <div className='mb-8 flex justify-between'>
        <div>
          <h2 className='mb-2 text-2xl font-bold'>Đánh giá của khách hàng</h2>
          {reviews.length === 0 ? (
            <span>Hiện chưa có đánh giá nào.</span>
          ) : (
            <div className='flex items-center gap-4'>
              <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
                <span className='text-3xl font-bold'>{average}</span>
                <RatingStars rating={average} />
              </div>
              <span className='text-gray-500'>Dựa trên {total} lượt đánh giá</span>
            </div>
          )}
        </div>
        <ReviewDialog />
      </div>

      {/* Reviews List */}
      <div className='space-y-6'>
        {reviews.map((review) => (
          <div key={review.id} className='border-b border-gray-200 pb-6'>
            <div className='mb-2 flex items-start justify-between'>
              <div>
                <h3 className='mb-1 font-semibold'>{review.user.name}</h3>
                <RatingStars rating={review.rating} />
              </div>
              <span className='text-sm text-gray-500'>{convertDateFormat(review.createdAt)}</span>
            </div>
            <div className='mt-2 text-gray-700'>
              <ExpandableText text={review.comment} />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages !== 0 && <Pagination totalPages={totalPages} />}
    </section>
  )
}

export default ReviewSection
