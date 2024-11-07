import { Book } from './book.type'

export type CartItem = {
  id: string
  userId: string
  product: Book
  quantity: number
}
