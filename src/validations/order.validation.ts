import { z } from 'zod'

const itemSchema = z.object({
  bookId: z.string(),
  quantity: z.number().int().positive()
})

const orderSchema = z.object({
  items: z.array(itemSchema),
  subTotal: z.number().nonnegative(),
  shippingCost: z.number().nonnegative(),
  total: z.number().nonnegative(),
  address: z.string().min(1),
  phoneNumber: z.string().regex(/^\d{10,15}$/, 'Số điện thoại không hợp lệ'),
  paymentMethod: z.string()
})

export type Order = z.infer<typeof orderSchema>

export { orderSchema }