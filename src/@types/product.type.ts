export type Product = {
  id: string
  bookId: string
  info: Info
  details: Details
  description: string
  createdAt: string
  updatedAt: string
}

type Details = {
  publisher: string
  publishingHouse: string
  bookVersion: null | string
  publishDate: string
  dimensions: string
  translator: null | string
  coverType: string
  pageCount: string
}

type Info = {
  title: string
  author: string
  imageUrl: string
  soldQuantity: number
  currentPrice: number
  originalPrice: number
}