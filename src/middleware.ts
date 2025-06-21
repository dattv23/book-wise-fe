import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { envServerConfig } from './lib/envServer'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')
  const path = request.nextUrl.pathname
  const isAdminRoute = path.startsWith('/admin')

  if (!isAdminRoute) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  try {
    const response = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token.value}`
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error('Unauthorized')
    }

    const { data } = await response.json()

    // If trying to access admin route but user is not admin
    if (data.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // If everything is ok, continue
    return NextResponse.next()
  } catch (error) {
    // If API call fails, clear the cookie and redirect to login
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/admin/:path*']
}
