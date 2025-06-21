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
    const { data } = await axiosInstance.get('/api/v1/reviews', {
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

export const exportReviews = async ({ isValid, sentiment }: { isValid?: string; sentiment?: string }) => {
  try {
    const response = await axiosInstance.get('/api/v2/export/reviews', {
      params: { isValid, sentiment },
      responseType: 'blob'
    })

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'reviews.csv')
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error exporting reviews:', error)
  }
}
