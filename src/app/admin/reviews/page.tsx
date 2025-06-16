import dynamic from 'next/dynamic'
import { SearchParams } from 'nuqs/server'

import { searchParamsCache } from '@/lib/searchParams'

const ReviewManagementPage = dynamic(() => import('@/containers/admin/review-management-page'))

type ReviewManagementProps = {
  searchParams: SearchParams
}

const ReviewManagement: React.FC<ReviewManagementProps> = async ({ searchParams }) => {
  searchParamsCache.parse(searchParams)
  return <ReviewManagementPage />
}

export default ReviewManagement
