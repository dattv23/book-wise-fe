'use server'

import { cookies } from 'next/headers'

import { envServerConfig } from '@/lib/envServer'
import { loginSchema, registerSchema, TLoginResponse } from '@/schemas'

export const loginAction = async (data: unknown) => {
  // server-side validation
  const result = loginSchema.safeParse(data)
  if (!result.success) {
    let errorMessage = ''
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + ': ' + issue.path + ': ' + issue.message + '.'
    })
    return {
      error: errorMessage
    }
  }

  const res = await fetch(`${envServerConfig.DOMAIN}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result.data),
    cache: 'no-cache'
  })
  const loginRes = await res.json()
  if (loginRes.status !== 200) {
    return {
      error: 'Login failed'
    }
  }

  const { token, expiresIn } = loginRes.data as TLoginResponse
  const cookieStore = cookies()
  cookieStore.set('accessToken', token, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    expires: Date.now() + expiresIn
  })

  return loginRes.data
}

export const registerAction = async (data: unknown) => {
  // server-side validation
  const result = registerSchema.safeParse(data)
  if (!result.success) {
    let errorMessage = ''
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + ': ' + issue.path + ': ' + issue.message + '.'
    })
    return {
      error: errorMessage
    }
  }

  const res = await fetch(`${envServerConfig.DOMAIN}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result.data),
    cache: 'no-cache'
  })
  const registerRes = await res.json()
  if (registerRes.status !== 200) {
    return {
      isSuccess: true,
      error: 'Login failed'
    }
  }
  return {
    isSuccess: true
  }
}
