import { z } from 'zod'

export const editProfileSchema = z.object({
  firstName: z.string({ required_error: 'First name is required' }),
  lastName: z.string({ required_error: 'Last name is required' }),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email'),
  address: z.string().optional(),
  currentPassword: z.string().min(8, 'Current password must be at least 8 characters long').optional(),
  newPassword: z.string().min(8, 'New password must be at least 8 characters long').optional(),
  confirmNewPassword: z.string().min(8, 'Confirm password must be at least 8 characters long')
})

export type TEditProfile = z.infer<typeof editProfileSchema>
