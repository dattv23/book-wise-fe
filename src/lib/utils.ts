import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { EXCHANGE_RATE, Locale, Locales, PICK_DISTRICT, PICK_PROVINCE } from '@/configs'
import { CartItem, Error as TError } from '@/types'

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://127.0.0.1:3000'
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
  return null
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key)
  }
  return null
}

export const replaceColor = (svgString: string, newColor: string) => {
  const regex = /fill="#[A-Fa-f0-9]{6}"/g
  const replacement = `fill="var(${newColor})"`
  return svgString.toString().replace(regex, replacement)
}

export const startScore = (rate: number) => {
  return '⭐⭐⭐⭐⭐⚝⚝⚝⚝⚝'.slice(5 - rate, 10 - rate)
}

// Helper function to create a timeout promise
export const promiseTimeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getError = (errors: TError[], field: string) => {
  return errors.find((item) => item.key == field)
}

export const calculateDiscountedPrice = (price: number, discount: number): number => {
  return price - price * (discount / 100)
}

export const formatPrice = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  maximumFractionDigits: 0
})

export const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

// Conversion functions
export function usdToVnd(usdAmount: number, exchangeRate: number) {
  const vndAmount = usdAmount * exchangeRate
  return VND.format(Math.round(vndAmount))
}

export function vndToUsd(vndAmount: number, exchangeRate: number) {
  const usdAmount = vndAmount / exchangeRate
  return USDollar.format(usdAmount)
}

export const convertPriceByLocale = (price: number, locale: Locale) => {
  switch (locale) {
    case Locales.VI:
      return VND.format(price)
    case Locales.EN:
      return vndToUsd(price, EXCHANGE_RATE)
    default:
      break
  }
}

export const calculateTotalPriceCart = (cart: CartItem[]) => {
  return cart.reduce(
    (pre, cur) => pre + calculateDiscountedPrice(cur.product.regularPrice, cur.product?.discount ?? 0) * cur.quantity,
    0
  )
}

export const calculateShippingFee = async (province: string, district: string, address: string, cart: CartItem[]) => {
  try {
    const token = localStorage.getItem('accessToken')
    const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_DOMAIN_API}/api/v1/shipping/fee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        pick_province: PICK_PROVINCE,
        pick_district: PICK_DISTRICT,
        province,
        district,
        address,
        weight: 10000,
        value: calculateTotalPriceCart(cart),
        transport: 'road'
      })
    })

    if (!response.ok) {
      throw new Error('Failed to calculate shipping fee')
    }

    const res = await response.json()
    return res.data
  } catch (error) {
    // console.error('Error calculating shipping fee:', error);
    return 0
  }
}
