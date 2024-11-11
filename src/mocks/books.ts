import { Book } from '@/@types'

export const books: Book[] = [
  {
    id: '1',
    info: {
      title: 'Of White and Shady',
      author: 'Robert Willardson',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      soldQuantity: 120,
      currentPrice: 360000,
      originalPrice: 400000
    },
    details: {
      publisher: 'Penguin Books',
      publishingHouse: 'Penguin Random House',
      bookVersion: '1st Edition',
      publishDate: '2023-01-01',
      dimensions: '20 x 13 cm',
      translator: null,
      coverType: 'Paperback',
      pageCount: '350'
    },
    createdAt: '2023-01-10',
    updatedAt: '2023-02-15'
  },
  {
    id: '2',
    info: {
      title: 'Dune Messiah',
      author: 'Frank Herbert',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      soldQuantity: 200,
      currentPrice: 720000,
      originalPrice: 800000
    },
    details: {
      publisher: 'Chilton Books',
      publishingHouse: 'Chilton Publishing',
      bookVersion: '2nd Edition',
      publishDate: '1969-10-15',
      dimensions: '24 x 16 cm',
      translator: null,
      coverType: 'Hardcover',
      pageCount: '400'
    },
    createdAt: '2023-01-15',
    updatedAt: '2023-02-20'
  }
]
