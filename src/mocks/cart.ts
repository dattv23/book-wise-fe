import { CartItem } from '@/@types'
import { books } from './books'

export const cart: CartItem[] = [
  {
    id: '1',
    userId: 'user1',
    product: books[0],
    quantity: 2
  },
  {
    id: '2',
    userId: 'user1',
    product: books[1],
    quantity: 3
  }
]
