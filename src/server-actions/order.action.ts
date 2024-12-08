'use server'

import { ActionResponse, ApiResponse } from '@/@types'
import axiosInstance from '@/lib/axios'
import { Order, orderSchema } from '@/validations/order.validation'
import { z } from 'zod'

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

export const deleteOrder = async (): Promise<ActionResponse<null>> => {
  try {
    const { data: resData } = await axiosInstance.delete('/orders')

    const result = resData
    const { statusCode, message } = result

    if (statusCode !== 204) {
      return {
        success: false,
        error: message || 'Xóa đơn đặt hàng thất bại!'
      }
    }

    return {
      success: true
    }
  } catch (error) {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

export const updateOrder = async (
  formData: z.infer<typeof orderSchema>,
  orderId: string
): Promise<ActionResponse<Order>> => {
  try {
    const { data: resData } = await axiosInstance.patch(`/orders/${orderId}`, JSON.stringify(formData))

    const result = resData as ApiResponse<Order>
    const { statusCode, message } = result

    if (statusCode !== 200) {
      return {
        success: false,
        error: message || 'Cập nhật đơn hàng thất bại!'
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
