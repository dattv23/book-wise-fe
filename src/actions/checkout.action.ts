'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { checkoutSchema } from '@/schemas'
import { envServerConfig } from '@/lib/envServer'
import { MappedCartItem } from '@/types'

export const checkoutAction = async (data: unknown, orderItems: MappedCartItem[]) => {
  const result = checkoutSchema.safeParse(data)
  if (!result.success) {
    let errorMessage = ''
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + ': ' + issue.path + ': ' + issue.message + '.'
    })
    return {
      error: errorMessage
    }
  }

  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')?.value
  if (!token) {
    redirect('/auth/sign-in')
  }
  const bodyData = {
    totalAmount: result.data.totalAmount,
    orderItems,
    recipientLastName: result.data.recipientLastName,
    recipientFirstName: result.data.recipientFirstName,
    recipientAddress: result.data.recipientAddress,
    recipientEmail: result.data.recipientEmail,
    recipientPhone: result.data.recipientPhone
  }
  try {
    const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/checkout?paymentMethodId=667e56c82c85882bfd6588af`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ ...bodyData })
    })
    if (res.status !== 200) {
      return {
        error: 'Order failed'
      }
    }
    await fetch(`${envServerConfig.DOMAIN_API}/api/v1/carts`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
  } catch (err) {
    return {
      error: 'Order failed'
    }
  }
}
