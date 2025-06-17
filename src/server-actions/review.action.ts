'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { reviewSchema } from '@/validations'
import { envServerConfig } from '@/lib/envServer'
import { ActionResponse, ApiResponse, Review } from '@/@types'
import axiosInstance from '@/lib/axios'

const addReview = async (
  formData: z.infer<typeof reviewSchema>,
  productId: string
): Promise<ActionResponse<Review>> => {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')
    const res = await fetch(`${envServerConfig.DOMAIN_API}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token?.value}`
      },
      body: JSON.stringify({ ...formData, productId })
    })

    const result = (await res.json()) as ApiResponse<Review>
    const { statusCode, message } = result

    if (statusCode !== 201) {
      return {
        success: false,
        error: message || 'Đánh giá thất bại'
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

const updateReview = async (
  formData: z.infer<typeof reviewSchema>,
  reviewId: string
): Promise<ActionResponse<Review>> => {
  try {
    const { data: resData } = await axiosInstance.patch(
      `/reviews/${reviewId}`,
      JSON.stringify({ ...formData, isValid: formData.isValid ? 'true' : 'false' })
    )

    const result = resData as ApiResponse<Review>
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

const deleteReview = async (reviewId: string): Promise<ActionResponse<Review>> => {
  try {
    const { data: resData } = await axiosInstance.delete(`/reviews/${reviewId}`)

    const result = resData as ApiResponse<Review>

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

export { addReview, updateReview, deleteReview }
