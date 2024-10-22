'use client'

import toast from 'react-hot-toast'

import { checkoutAction } from '@/actions'
import { checkoutSchema } from '@/schemas'
import { CartItem, Error, mapCartToMappedCartItem } from '@/types'

type TParams = {
  formData: FormData
  onChangeErrors: React.Dispatch<React.SetStateAction<Error[]>>
  cart: CartItem[]
  totalAmount: number
}

export const checkoutFormAction = async (params: TParams) => {
  const { formData, onChangeErrors, totalAmount, cart } = params

  const data = {
    recipientFirstName: formData.get('recipientFirstName'),
    recipientLastName: formData.get('recipientLastName'),
    recipientCity: formData.get('recipientCity'),
    recipientDistrict: formData.get('recipientDistrict'),
    recipientAddress: formData.get('recipientAddress'),
    recipientEmail: formData.get('recipientEmail'),
    recipientPhone: formData.get('recipientPhone'),
    totalAmount
  }

  const result = checkoutSchema.safeParse(data)
  if (!result.success) {
    const newErrors: Error[] = result.error.issues.map((issue) => ({
      key: issue.path[0],
      message: issue.message
    }))
    onChangeErrors(newErrors)
    return
  }

  const res = await checkoutAction(data, mapCartToMappedCartItem(cart))
  if (res?.error) {
    toast.error(res.error)
  } else return { isSuccess: true }
}
