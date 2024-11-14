import { Review } from '@/@types'
import { books } from './books'

export const reviews: Review[] = [
  {
    id: '1',
    rating: 5,
    comment: 'This book was absolutely amazing! The character development and plot twists kept me engaged throughout.',
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
    isDeleted: false,
    userId: 'user1',
    productId: books[0].id,
    product: books[0],
    user: {
      userId: 'user1',
      name: 'John Smith'
    }
  },
  {
    id: '2',
    rating: 4,
    comment: 'A great read overall. The pacing was perfect, though the ending felt a bit rushed.',
    createdAt: '2024-03-10T00:00:00Z',
    updatedAt: '2024-03-10T00:00:00Z',
    isDeleted: false,
    userId: 'user2',
    productId: books[1].id,
    product: books[1],
    user: {
      userId: 'user2',
      name: 'Sarah Johnson'
    }
  }
]
