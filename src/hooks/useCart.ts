'use client'

import { useEffect } from 'react'

import { envClientConfig } from '@/lib/envClient'
import { useAuthStore, useCartStore } from '@/stores'

const useCart = () => {
  const { isAuth } = useAuthStore()
  const { cart, update: updateCart } = useCartStore()

  useEffect(() => {
    const getDataCart = async () => {
      const token = localStorage.getItem('accessToken')
      const res = await fetch(`${envClientConfig.NEXT_PUBLIC_CLIENT_DOMAIN_API}/api/v1/carts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        cache: 'no-cache'
      })
      if (res.ok) {
        const data = (await res.json())['data']
        updateCart(data)
      }
    }
    if (isAuth) {
      getDataCart()
    }
  }, [isAuth, updateCart])

  return { cart }
}

export default useCart
