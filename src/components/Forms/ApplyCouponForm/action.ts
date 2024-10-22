'use client'

import toast from 'react-hot-toast'

import { Error } from '@/types'
import { couponSchema } from '@/schemas'
import { applyCouponAction } from '@/actions'

type TParams = {
  formData: FormData
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>
}

export const applyCouponFormAction = async (params: TParams) => {
  const { formData, onChangeErrors } = params

  const data = {
    code: formData.get('code')
  }

  // client-side validation
  const result = couponSchema.safeParse(data)
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0], // Use the path as the key
      message: issue.message // Add a message property to store the error message
    }))
    onChangeErrors(newErrors)
    return
  }
  const res = await applyCouponAction(result.data)
  if (res?.error) {
    toast.error(res.error)
  }
}
