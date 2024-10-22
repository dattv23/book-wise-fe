'use client'

import toast from 'react-hot-toast'

import { loginAction } from '@/actions'
import { Error } from '@/types'
import { loginSchema, TLoginResponse } from '@/schemas'
import { Role } from '@/configs'

type TParams = {
  formData: FormData
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>
}

export const loginFormAction = async (params: TParams) => {
  const { formData, onChangeErrors } = params

  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  // client-side validation
  const result = loginSchema.safeParse(data)
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0], // Use the path as the key
      message: issue.message // Add a message property to store the error message
    }))
    onChangeErrors(newErrors)
    return
  }
  const res = await loginAction(result.data)
  if (res?.error) {
    toast.error(res.error)
    return
  }
  const { role, token } = res as TLoginResponse
  localStorage.setItem('accessToken', token)
  if (role === Role.ADMIN) {
    window.location.href = '/admin'
  }
  if (role === Role.USER) {
    window.location.href = '/'
  }
}
