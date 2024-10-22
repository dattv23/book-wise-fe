import 'server-only'
import { defaultLocale, Locale } from '@/configs'

const locales = {
  en: () => import('./en.json').then((module) => module.default),
  vi: () => import('./vi.json').then((module) => module.default)
}

export const getDictionary = async (locale?: Locale) => {
  if (locale && ['en', 'vi'].includes(locale)) {
    return locales[locale]()
  }
  return locales[defaultLocale]()
}
