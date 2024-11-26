'use server'

import type { ActionResponse, ApiResponse, User } from '@/@types'
import axiosInstance from '@/lib/axios'
import type { registerSchema } from '@/validations'
import type { z } from 'zod'

const addUser = async (formData: z.infer<typeof registerSchema>): Promise<ActionResponse<User>> => {
  try {
    const { data: resData } = await axiosInstance.post('/users', JSON.stringify(formData))

    const result = resData as ApiResponse<User>
    const { statusCode, message } = result

    if (statusCode !== 201) {
      return {
        success: false,
        error: message || 'Thêm người dùng mới thất bại!'
      }
    }

    return {
      success: true,
      data: result.data
    }
  } catch (error) {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

const updateUser = async (formData: z.infer<typeof registerSchema>, userId: string): Promise<ActionResponse<User>> => {
  try {
    const { data: resData } = await axiosInstance.patch(`/users/${userId}`, JSON.stringify(formData))

    const result = resData as ApiResponse<User>
    const { statusCode, message } = result

    if (statusCode !== 200) {
      return {
        success: false,
        error: message || 'Cập nhật người dùng thất bại!'
      }
    }

    return {
      success: true,
      data: result.data
    }
  } catch (error) {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

const deleteUser = async (userId: string): Promise<ActionResponse<User>> => {
  try {
    const { data: resData } = await axiosInstance.delete(`/users/${userId}`)

    const result = resData as ApiResponse<User>

    return {
      success: true,
      data: result.data
    }
  } catch (error) {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

export { addUser, updateUser, deleteUser }
