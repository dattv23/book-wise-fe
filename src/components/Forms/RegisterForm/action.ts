'use client'

import toast from 'react-hot-toast'

import { Error } from '@/types'
import { registerAction } from '@/actions'
import { registerSchema } from '@/schemas'

type TParams = {
  formData: FormData
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>
}

export const registerFormAction = async (params: TParams) => {
  const { formData, onChangeErrors } = params

  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    password: formData.get('password'),
    email: formData.get('email')
  }

  // client-side validation
  const result = registerSchema.safeParse(data)
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0], // Use the path as the key
      message: issue.message // Add a message property to store the error message
    }))
    onChangeErrors(newErrors)
    return
  }
  const res = await registerAction(result.data)
  if (res?.error) {
    toast.error(res.error)
  }
  if (res.isSuccess) {
    toast.success('Register success')
  }
}
