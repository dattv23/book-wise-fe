import { z } from 'zod'

export const checkoutSchema = z.object({
  recipientFirstName: z
    .string({ required_error: 'First name is required' })
    .min(3, 'First name must be 3 or more characters long'),
  recipientLastName: z
    .string({ required_error: 'Last Name is required' })
    .min(2, 'Last name must be 2 or more characters long'),
  recipientCity: z
    .string({ required_error: 'Province is required' })
    .min(4, 'Province must be 5 or more characters long'),
  recipientDistrict: z
    .string({ required_error: 'District is required' })
    .min(4, 'District must be 5 or more characters long'),
  recipientAddress: z
    .string({ required_error: 'Address is required' })
    .min(4, 'Address must be 5 or more characters long'),
  recipientEmail: z.string({ required_error: 'Email is required' }).email('Invalid email'),
  recipientPhone: z
    .string({ required_error: 'Your phone is required' })
    .min(10, 'Your phone must be 10 characters long'),
  totalAmount: z.number()
})

export type TCheckOut = z.infer<typeof checkoutSchema>
