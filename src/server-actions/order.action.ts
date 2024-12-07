'use server'

import { ActionResponse, ApiResponse } from '@/@types'
import axiosInstance from '@/lib/axios'
import { Order } from '@/validations/order.validation'

export const createOrder = async (formData: Order): Promise<ActionResponse<Order>> => {
  try {
    const { data: resData } = await axiosInstance.post('/orders', JSON.stringify(formData))

    const result = resData as ApiResponse<Order>
    const { statusCode, message } = result

    if (statusCode !== 200) {
      return {
        success: false,
        error: message || 'Đặt hàng thất bại!'
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
