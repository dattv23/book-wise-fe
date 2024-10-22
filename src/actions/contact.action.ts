'use server'

import { redirect } from 'next/navigation'

import { contactSchema } from '@/schemas'

export const contactAction = async (data: unknown) => {
  // server-side validation
  const result = contactSchema.safeParse(data)
  if (!result.success) {
    let errorMessage = ''
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + ': ' + issue.path + ': ' + issue.message + '.'
    })
    return {
      error: errorMessage
    }
  }

  redirect('/contact')
}
