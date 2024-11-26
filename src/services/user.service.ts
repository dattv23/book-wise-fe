import axiosInstance from '@/lib/axios'

export const getUsers = async ({
  page = 1,
  limit = 10,
  search
}: {
  page?: number
  limit?: number
  search?: string
}) => {
  try {
    const { data } = await axiosInstance.get('/users', {
      params: {
        page,
        limit,
        search
      }
    })
    return data
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

export const getUserById = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(`/users/${userId}`)
    return data
  } catch (error) {
    return null
  }
}
