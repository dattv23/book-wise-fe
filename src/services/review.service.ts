import axiosInstance from '@/lib/axios'

export const getReviews = async ({
  page = 1,
  limit = 10,
  search,
  isValid,
  sentiment
}: {
  page?: number
  limit?: number
  search?: string
  isValid?: string
  sentiment?: string
}) => {
  try {
    const { data } = await axiosInstance.get('/reviews', {
      params: {
        page,
        limit,
        search,
        isValid,
        sentiment
      }
    })
    return data
  } catch (error) {
    console.error('Error fetching reviews:', error)
  }
}
