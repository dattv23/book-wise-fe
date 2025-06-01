import { User } from './user.type'

export type Review = {
  id: string
  rating: number
  comment?: string
  userId: string
  productId: string
  createdAt: string
  updatedAt: string
  user: User
}
