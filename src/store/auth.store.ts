/* eslint-disable no-unused-vars */
import { User } from '@/@types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Auth = {
  isAuth: boolean
  user: User | null
}

type AuthActions = {
  setUser: (user: User) => void
  clear: () => void
}

export const useAuthStore = create<Auth & AuthActions>()(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      setUser: (user: User) => set({ isAuth: true, user }),
      clear: () => set({ isAuth: false, user: null })
    }),
    {
      name: 'user'
    }
  )
)
