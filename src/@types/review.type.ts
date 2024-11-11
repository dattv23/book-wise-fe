import { Book } from './book.type'
import { User } from './user.type'

export type Review = {
  id: string
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
  isDeleted: boolean
  userId: string
  bookId: string
  book: Pick<Book, 'id' | 'info'>
  user: Pick<User, 'id' | 'name'>
}
