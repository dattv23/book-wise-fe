/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { Product } from '@/types'

type WishListStore = {
  wishList: Product[]
  add: (product: Product) => void
  remove: (idProduct: string) => void
  removeAll: () => void
  find: (idProduct: string, wishList: Product[]) => boolean
}

export const useWishListStore = create<WishListStore>()(
  devtools(
    persist(
      (set, get) => ({
        wishList: [],
        add: (product: Product) => {
          const { wishList } = get()
          if (!wishList.includes(product)) {
            set({ wishList: [...wishList, product] })
          }
        },
        remove: (idProduct: string) => {
          const { wishList } = get()
          const updatedWishList = removeWishList(idProduct, wishList)
          set({ wishList: updatedWishList })
        },
        removeAll: () => set({ wishList: [] }),
        find: (idProduct: string, wishList: Product[]): boolean => {
          const checkExist = wishList.find((item) => item.id === idProduct)
          return checkExist ? true : false
        }
      }),
      {
        name: 'wishList'
      }
    )
  )
)

function removeWishList(idProduct: string, wishList: Product[]) {
  return wishList.filter((item) => {
    return item.id !== idProduct
  })
}
