import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'vi']

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.includes('/admin')) {
    // For admin routes, just continue without applying internationalization
    return NextResponse.next()
  }

  // Apply the internationalization middleware
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: 'en'
  })
  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
