'use server'

import { z } from 'zod'

import axiosInstance from '@/lib/axios'
import { ActionResponse, ApiResponse } from '@/@types'
import { Order, orderSchema } from '@/validations/order.validation'

export const createOrder = async (formData: Order): Promise<ActionResponse<Order | string>> => {
  try {
    const { data: resData } = await axiosInstance.post('/api/v1/orders', JSON.stringify(formData))

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
    const { data: resData } = await axiosInstance.delete('/api/v1/orders')

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
    const { data: resData } = await axiosInstance.patch(`/api/v1/orders/${orderId}`, JSON.stringify(formData))

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
