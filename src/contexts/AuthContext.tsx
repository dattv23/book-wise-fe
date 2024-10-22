'use client'

import { createContext, useEffect } from 'react'
import jwt from 'jsonwebtoken'

import { useAuthStore } from '@/stores'
import { TokenPayload } from '@/types'

const AuthContext = createContext<null>(null)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { login, logout } = useAuthStore()

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      try {
        const decoded = jwt.decode(token) as TokenPayload
        if (decoded) {
          login({
            userId: decoded.userId,
            email: decoded.sub,
            role: decoded.role
          })
        } else {
          logout()
        }
      } catch (error) {
        console.error('Failed to decode token:', error)
        logout()
      }
    }
  }, [login, logout])

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}
