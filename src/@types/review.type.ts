import { Product } from './product.type'
import { User } from './user.type'

export type Review = {
  id: string
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
  isDeleted: boolean
  userId: string
  productId: string
  product: Pick<Product, 'id' | 'info'>
  user: Pick<User, 'id' | 'name'>
}
