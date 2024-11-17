import { z } from 'zod'

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

// Validation schema for BookInfo
const bookInfoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  imageUrl: z.string().url('Invalid image URL').optional(),
  soldQuantity: z.coerce.number().optional().default(0),
  currentPrice: z.coerce.number(),
  originalPrice: z.coerce.number()
})

// Validation schema for BookDetails
const bookDetailsSchema = z.object({
  publisher: z.string().min(1, 'Publisher is required'),
  publishingHouse: z.string().min(1, 'Publishing house is required'),
  bookVersion: z.string().optional(),
  publishDate: z.date().optional(),
  dimensions: z.string().optional(),
  translator: z.string().optional(),
  coverType: z.string().optional(),
  pageCount: z.string().optional()
})

const productSchema = z.object({
  image: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    )
    .optional(),
  info: bookInfoSchema,
  details: bookDetailsSchema,
  description: z.string().optional().default(''),
  categoryId: z.string().uuid()
})

export default productSchema
