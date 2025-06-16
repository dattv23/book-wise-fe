import axiosInstance from '@/lib/axios'

export const getProducts = async ({
  page = 1,
  limit = 10,
  search,
  categoryId
}: {
  page?: number
  limit?: number
  search?: string
  categoryId?: string
}) => {
  try {
    const { data } = await axiosInstance.get('/products', {
      params: {
        page,
        limit,
        search,
        categoryId
      }
    })
    return data
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

export const getProductById = async (productId: string) => {
  try {
    const { data } = await axiosInstance.get(`/products/${productId}`)
    return data
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error)
    return null
  }
}
