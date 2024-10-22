import { apiEndpoints } from '@/configs'
import { envServerConfig } from '@/lib/envServer'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Parse the request body as JSON
    const body = await request.json()

    const res = await fetch(`${envServerConfig.DOMAIN_API}/${apiEndpoints.auth.register}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    // console.error('Error parsing request body:', error);
    return new Response('Error parsing request body', { status: 400 })
  }
}
