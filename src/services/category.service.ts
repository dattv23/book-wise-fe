import axiosInstance from '@/lib/axios'

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get('/api/v1/categories')
    return data
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}
