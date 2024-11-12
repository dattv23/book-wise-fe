/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { CartItem, Product } from '@/@types'

type CartStore = {
  cart: CartItem[]
  countItems: () => number
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  removeAll: () => void
  updateQuantity: (productId: string, newQuantity: number) => void
  checkIsExist: (productId: string) => boolean
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        countItems: () => {
          const { cart } = get()
          if (cart.length) return cart.map((item) => item.quantity).reduce((prev, curr) => prev + curr)
          return 0
        },
        addItem: (product: Product) => {
          const { cart } = get()
          set({ cart: [...cart, { product, quantity: 1 }] })
        },
        removeItem: (productId: string) => {
          const { cart } = get()
          set({ cart: cart.filter((item) => item.product.id !== productId) })
        },
        removeAll: () => set({ cart: [] }),
        updateQuantity: (productId: string, newQuantity: number) => {
          const { cart } = get()
          set({
            cart: cart.map((item) => (item.product.id === productId ? { ...item, quantity: newQuantity } : item))
          })
        },
        checkIsExist: (productId: string) => {
          const { cart } = get()
          return cart.some((item) => item.product.id === productId)
        }
      }),
      {
        name: 'cart'
      }
    )
  )
)
