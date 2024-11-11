import { Review } from '@/@types'

export const reviews: Review[] = [
  {
    id: '1',
    rating: 5,
    comment: 'This book was absolutely amazing! The character development and plot twists kept me engaged throughout.',
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
    isDeleted: false,
    userId: 'user1',
    bookId: 'book1',
    book: {
      id: 'book1',
      info: {
        title: 'Of White and Shady',
        author: 'Robert Willardson',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300',
        soldQuantity: 120,
        currentPrice: 360000,
        originalPrice: 400000
      }
    },
    user: {
      id: 'user1',
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
    bookId: 'book2',
    book: {
      id: 'book2',
      info: {
        title: 'Of White and Shady',
        author: 'Robert Willardson',
        imageUrl: 'https://picsum.photos/seed/picsum/200/300',
        soldQuantity: 120,
        currentPrice: 360000,
        originalPrice: 400000
      }
    },
    user: {
      id: 'user2',
      name: 'Sarah Johnson'
    }
  }
]
