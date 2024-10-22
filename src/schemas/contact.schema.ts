import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string({ required_error: 'Your name is required' }).min(5, 'Your name must be 5 or more characters long'),
  phone: z.string({ required_error: 'Your phone is required' }).min(10, 'Your phone must be 10 characters long'),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email'),
  message: z.string({ required_error: 'Message is required' }).min(8, 'Message must be at least 8 characters long')
})

export type TContact = z.infer<typeof contactSchema>
