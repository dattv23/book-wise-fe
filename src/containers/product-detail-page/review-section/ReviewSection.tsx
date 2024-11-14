import { ApiResponse, Review } from '@/@types'

import { convertDateFormat } from '@/lib/helpers'
import { envServerConfig } from '@/lib/envServer'

import ReviewDialog from '@/components/dialogs/review-dialog'
import RatingStars from '@/components/shared/rating-stars/RatingStars'

type ReviewSectionProps = {
  bookId: number
}

async function getReviews(bookId: number) {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/reviews?bookId=${bookId}`, { cache: 'no-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return { data: [] }
  }

  return res.json()
}

const ReviewSection: React.FC<ReviewSectionProps> = async ({ bookId }) => {
  const { data: reviews } = (await getReviews(bookId)) as ApiResponse<Review[]>
  const sumRating = reviews.reduce((acc, review) => acc + review.rating, 0)
  const averageRating = sumRating / reviews.length

  return (
    <section className='mx-4 py-8 md:mx-14'>
      {/* Header Section */}
      <div className='mb-8 flex justify-between'>
        <div>
          <h2 className='mb-2 text-2xl font-bold'>Đánh giá của khách hàng</h2>
          {reviews.length === 0 ? (
            <span>Hiện chưa có đánh giá nào.</span>
          ) : (
            <div className='flex items-center gap-4'>
              <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
                <span className='text-3xl font-bold'>{averageRating}</span>
                <RatingStars rating={averageRating} />
              </div>
              <span className='text-gray-500'>Dựa trên {reviews.length} lượt đánh giá</span>
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
            <p className='mt-2 text-gray-700'>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* {reviews.length > 0 && <Pagination />} */}
    </section>
  )
}

export default ReviewSection
