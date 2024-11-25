'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { reviewSchema } from '@/validations'
import { envServerConfig } from '@/lib/envServer'
import { ActionResponse, ApiResponse, Review } from '@/@types'

const reviewAction = async (
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
      body: JSON.stringify({ ...formData, bookId: productId })
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

export default reviewAction
