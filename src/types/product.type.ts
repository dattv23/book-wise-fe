/* eslint-disable no-unused-vars */
export enum PRODUCT_STATUS {
  NEW = 'new',
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'out_of_stock',
  DISCONTINUED = 'discontinued'
}

export type Product = {
  id: string
  name: string
  description: string
  categoryId: string
  stockQuantity: number
  imageUrl: string
  regularPrice: number
  discount: number
  rate: number
  number_of_rate: number
  status: PRODUCT_STATUS
}
