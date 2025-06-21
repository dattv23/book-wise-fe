import { ApiResponse, Review } from '@/@types'
import PageContainer from '@/components/layout/admin/page-container'
import ReviewTable from '@/components/tables/review-table'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { ACCESS_TOKEN } from '@/lib/constants'
import { searchParamsCache } from '@/lib/searchParams'
import { getReviews } from '@/services/review.service'
import { cookies } from 'next/headers'

const ReviewManagementPage: React.FC = async () => {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page')
  const search = searchParamsCache.get('q')
  const pageLimit = searchParamsCache.get('limit')
  const isValid = searchParamsCache.get('isValid')
  const sentiment = searchParamsCache.get('sentiment')
  const cookieStore = cookies()
  const token = cookieStore.get(ACCESS_TOKEN)

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(isValid && { isValid }),
    ...(sentiment && { sentiment })
  }

  const {
    data: { reviews, total }
  } = (await getReviews(filters)) as ApiResponse<{ reviews: Review[]; total: number; totalPages: number }>

  return (
    <PageContainer scrollable>
      <div className='space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading title={`Review (${total})`} description='Manage reviews' />
        </div>
        <Separator />
        <ReviewTable data={reviews} totalData={total} token={token && token.value ? token.value : ''} />
      </div>
    </PageContainer>
  )
}

export default ReviewManagementPage
