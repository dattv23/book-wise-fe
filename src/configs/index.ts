/* eslint-disable no-unused-vars */
import { Pathnames } from 'next-intl/navigation'

export const isProd = process.env.NODE_ENV === 'production'
export const isLocal = process.env.NODE_ENV === 'development'

export const showLogger = process.env.NEXT_PUBLIC_SHOW_LOGGER

export const defaultLocale = 'en' as const
export const locales = ['en', 'vi'] as const
export type Locale = 'en' | 'vi'
export const i18n = {
  defaultLocale,
  locales
} as const

export const pathnames = {
  '/': '/'
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames

const API_VERSION = 'api/v1'
export const apiEndpoints = {
  auth: {
    login: `${API_VERSION}/auth/login`,
    register: `${API_VERSION}/auth/signup`
  }
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum Locales {
  VI = 'vi',
  EN = 'en'
}

export const EXCHANGE_RATE = 23000

export const PICK_PROVINCE = 'Hồ Chí Minh'
export const PICK_DISTRICT = 'Thủ Đức'
