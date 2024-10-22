'use server'

import { redirect } from 'next/navigation'

import { editProfileSchema } from '@/schemas'

export const editProfileAction = async (data: unknown) => {
  // server-side validation
  const result = editProfileSchema.safeParse(data)
  if (!result.success) {
    let errorMessage = ''
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + ': ' + issue.path + ': ' + issue.message + '.'
    })
    return {
      error: errorMessage
    }
  }

  redirect('/')
}
