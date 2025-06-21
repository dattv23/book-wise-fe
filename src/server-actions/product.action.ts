'use server'

import { cookies } from 'next/headers'
import { ActionResponse, ApiResponse, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'
import { z } from 'zod'
import productSchema from '@/validations/product.validation'
import axiosInstance from '@/lib/axios'

const uploadImage = async (formData: FormData): Promise<ActionResponse<{ url: string }>> => {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')
    const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/upload/image`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token?.value}`
      },
      body: formData
    })

    const result = (await res.json()) as ApiResponse<{ url: string }>
    const { statusCode, message } = result

    if (statusCode !== 201) {
      return {
        success: false,
        error: message || 'Tải hình ảnh thất bại'
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

const addProduct = async (formData: z.infer<typeof productSchema>): Promise<ActionResponse<Product>> => {
  try {
    const { data: resData } = await axiosInstance.post('/api/v1/products', JSON.stringify(formData))

    const result = resData as ApiResponse<Product>
    const { statusCode, message } = result

    if (statusCode !== 201) {
      return {
        success: false,
        error: message || 'Thêm sản phẩm mới thất bại!'
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

const updateProduct = async (
  formData: z.infer<typeof productSchema>,
  productId: string
): Promise<ActionResponse<Product>> => {
  try {
    const { data: resData } = await axiosInstance.patch(`/api/v1/products/${productId}`, JSON.stringify(formData))

    const result = resData as ApiResponse<Product>
    const { statusCode, message } = result

    if (statusCode !== 200) {
      return {
        success: false,
        error: message || 'Cập nhật sản phẩm thất bại!'
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

const deleteProduct = async (productId: string): Promise<ActionResponse<Product>> => {
  try {
    const { data: resData } = await axiosInstance.delete(`/api/v1/products/${productId}`)

    const result = resData as ApiResponse<Product>

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

export { uploadImage, addProduct, updateProduct, deleteProduct }
