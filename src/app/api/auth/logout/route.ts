import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Parse the request body as JSON
    const cookieStore = cookies()
    cookieStore.delete('accessToken')

    return NextResponse.json({
      status: 200,
      body: JSON.stringify({ status: 200, message: 'Logout successfully!' })
    })
  } catch (error) {
    // console.error('Error parsing request body:', error);
    return new Response('Error parsing request body', { status: 400 })
  }
}
