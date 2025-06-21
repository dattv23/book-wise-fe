'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { loginSchema } from '@/validations/auth.validation'
import { envServerConfig } from '@/lib/envServer'
import { ActionResponse, LoginResponse } from '@/@types'

const loginAction = async (formData: z.infer<typeof loginSchema>): Promise<ActionResponse<LoginResponse>> => {
  try {
    const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const result = (await res.json()) as LoginResponse
    const { statusCode, message } = result

    if (statusCode !== 200) {
      return {
        success: false,
        error: message || 'Đăng nhập thất bại'
      }
    }

    const {
      data: {
        tokens: { access, refresh }
      }
    } = result

    const cookieStore = cookies()
    cookieStore.set('access_token', access.token, {
      expires: new Date(access.expires),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })

    cookieStore.set('refresh_token', refresh.token, {
      expires: new Date(refresh.expires),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    })

    return {
      success: true,
      data: result
    }
  } catch (error) {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

export default loginAction
