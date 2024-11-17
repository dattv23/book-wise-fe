import axiosInstance from '@/lib/axios'

export const getProducts = async ({
  page = 1,
  limit = 10,
  search,
  categories
}: {
  page?: number
  limit?: number
  search?: string
  categories?: string
}) => {
  try {
    const { data } = await axiosInstance.get('/books', {
      params: {
        page,
        limit,
        search,
        categories
      }
    })
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

export const getProductById = async (productId: string) => {
  try {
    const { data } = await axiosInstance.get(`/books/${productId}`)
    return data
  } catch (error) {
    // console.error(`Error fetching product ${productId}:`, error)
    return null
  }
}
