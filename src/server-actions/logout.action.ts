'use server'

import { cookies } from 'next/headers'

import { ActionResponse } from '@/@types'
import { envServerConfig } from '@/lib/envServer'

const logoutAction = async (): Promise<ActionResponse<object>> => {
  try {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refresh_token')

    if (!refreshToken) {
      return {
        success: true,
        data: {}
      }
    }

    const res = await fetch(`${envServerConfig.DOMAIN_API}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        refreshToken: refreshToken.value
      })
    })

    if (!res.ok) {
      return {
        success: false,
        error: 'Đăng xuất thất bại'
      }
    }

    cookieStore.delete('access_token')
    cookieStore.delete('refresh_token')

    return {
      success: true,
      data: {}
    }
  } catch (error) {
    return {
      success: false,
      error: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
    }
  }
}

export default logoutAction
