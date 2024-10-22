import { Product } from './product.type'

export type Category = {
  id: number
  name: string
  description: string
  slug: string
  icon?: React.ReactElement
  products: Product[]
}
