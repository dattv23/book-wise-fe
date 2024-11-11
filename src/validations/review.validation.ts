import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.string({ required_error: 'Điểm đánh giá là bắt buộc!', coerce: true }),
  comment: z.string().optional()
})
