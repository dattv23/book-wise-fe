import { Product } from './product.type'

export type CartItem = {
  product: Pick<Product, 'bookId' | 'info'>
  quantity: number
}
