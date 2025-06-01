/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { Product } from '@/@types'

type FavoriteStore = {
  favorite: Product[]
  add: (product: Product) => void
  remove: (productId: string) => void
  removeAll: () => void
  find: (productId: string) => boolean
}

export const useFavoriteStore = create<FavoriteStore>()(
  devtools(
    persist(
      (set, get) => ({
        favorite: [],
        add: (product: Product) => {
          const { favorite } = get()
          if (!favorite.includes(product)) {
            set({ favorite: [...favorite, product] })
          }
        },
        remove: (productId: string) => {
          const { favorite } = get()
          const updatedFavorite = favorite.filter((item) => item.id !== productId)
          set({ favorite: updatedFavorite })
        },
        removeAll: () => set({ favorite: [] }),
        find: (productId: string): boolean => {
          const { favorite } = get()
          return favorite.some((item) => item.id === productId)
        }
      }),
      {
        name: 'favorite'
      }
    )
  )
)
