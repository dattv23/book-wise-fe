import axiosInstance from '@/lib/axios'

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get('/categories')
    return data
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}
