import { Author } from './author.type'
import { CartItem } from './cart.type'
import { Category } from './category.type'
import { Review } from './review.type'
import { Specification } from './specification.type'
import { Store } from './store.type'
import { Wishlist } from './wishlist.type'

export type Product = {
  id: string
  sku: string
  name: string
  originalPrice: number
  discount: number
  thumbnailUrl: string
  stockQuantity: number
  shortDescription?: string
  description?: string
  galleryImages: string[]
  originalId: number

  storeId: string
  categoryId: string

  createdAt: string
  updatedAt: string

  // Optional relational fields
  authors?: { author: Author }[]
  category?: Category
  store?: Store
  reviews?: Review[]
  specifications?: Specification[]
  wishlistItems?: Wishlist[]
  cartItems?: CartItem[]
}
