import { CartItem } from '@/@types'

export const cart: CartItem[] = [
  {
    id: '1',
    userId: 'user1',
    product: {
      id: '2',
      title: 'Dune Messiah',
      author: 'Frank Herbert',
      price: 720000.0,
      rating: 5,
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      description:
        'An epic tale of power and prophecy in a desert world where one man rises above all to become a legend.'
    },
    quantity: 2
  },
  {
    id: '2',
    userId: 'user1',
    product: {
      id: '5',
      title: 'She Rises',
      author: 'Robert Willardson',
      price: 360000.0,
      rating: 5,
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      description:
        'A powerful narrative about resilience, transformation, and a woman’s journey to reclaim her destiny.'
    },
    quantity: 3
  }
]
