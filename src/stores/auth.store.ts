/* eslint-disable no-unused-vars */
import { create } from 'zustand'

import { Role } from '@/configs'

type User = {
  role: Role
  userId: string
  email: string
}

export type Auth = {
  isAuth: boolean
  user: User | null
}

type AuthActions = {
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<Auth & AuthActions>((set) => ({
  isAuth: false,
  user: null,
  login: (user: User) => set({ isAuth: true, user }),
  logout: () => set({ isAuth: false, user: null })
}))
