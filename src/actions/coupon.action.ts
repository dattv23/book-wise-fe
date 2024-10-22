'use server'

import { redirect } from 'next/navigation'

import { couponSchema } from '@/schemas'

export const applyCouponAction = async (data: unknown) => {
  // server-side validation
  const result = couponSchema.safeParse(data)
  if (!result.success) {
    let errorMessage = ''
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + ': ' + issue.path + ': ' + issue.message + '.'
    })
    return {
      error: errorMessage
    }
  }

  redirect('/cart')
}
