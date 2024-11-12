import { CartItem } from '@/@types'
import { books } from './books'

export const cart: CartItem[] = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 3
  }
]
