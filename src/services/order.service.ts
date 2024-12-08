import axiosInstance from '@/lib/axios'

export const getOrders = async ({
  page = 1,
  limit = 10,
  search
}: {
  page?: number
  limit?: number
  search?: string
}) => {
  try {
    const { data } = await axiosInstance.get('/orders', {
      params: {
        page,
        limit,
        search
      }
    })
    return data
  } catch (error) {
    console.error('Error fetching orders:', error)
  }
}

export const getOrderById = async (orderId: string) => {
  try {
    const { data } = await axiosInstance.get(`/orders/${orderId}`)
    return data
  } catch (error) {
    // console.error(`Error fetching order ${orderId}:`, error)
    return null
  }
}
