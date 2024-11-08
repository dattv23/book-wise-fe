'use server'

import { z } from 'zod'
import { cookies } from 'next/headers'

import { loginSchema } from '@/validations/auth.validation'
import { envServerConfig } from '@/lib/envServer'
import { LoginResponse } from '@/@types'

const loginAction = async (data: z.infer<typeof loginSchema>) => {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = (await res.json()) as LoginResponse
  const { statusCode, message } = result
  if (statusCode !== 200) {
    return { isSuccess: false, message, errors: result.errors }
  }
  const {
    data: {
      user,
      tokens: { access, refresh }
    }
  } = result
  const cookieStore = cookies()
  cookieStore.set('access_token', access.token, { expires: new Date(access.expires), httpOnly: true })
  cookieStore.set('refresh_token', refresh.token, { expires: new Date(access.expires), httpOnly: true })
  return {
    isSuccess: true,
    message,
    data: user
  }
}

export default loginAction
