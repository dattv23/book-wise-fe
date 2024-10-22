import { z } from 'zod'

export const couponSchema = z.object({
  couponCode: z.string().optional()
})

export type TCoupon = z.infer<typeof couponSchema>
