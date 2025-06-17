import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.string({ required_error: 'Điểm đánh giá là bắt buộc!', coerce: true }),
  comment: z.string().optional(),
  sentiment: z.enum(['pos', 'neg', 'neu']).optional(),
  isValid: z
    .enum(['true', 'false'])
    .default('true')
    .transform((val) => val === 'true')
    .optional()
})
