import { User } from './user.type'

export type Review = {
  id: string
  rating: number
  comment?: string
  sentiment?: 'pos' | 'neg' | 'neu'
  isValid: boolean
  userId: string
  productId: string
  createdAt: string
  updatedAt: string
  user: User
}
