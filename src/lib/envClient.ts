'use client'

import { z } from 'zod'

// Client-side environment variables schema
const configClientSchema = z.object({
  NEXT_PUBLIC_SHOW_LOGGER: z.enum(['true', 'false']).optional(),
  NEXT_PUBLIC_APP_URL: z.string(),
  NEXT_PUBLIC_CLIENT_DOMAIN_API: z.string()
})

// Validate client-side environment variables
const configClient = configClientSchema.safeParse({
  NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_CLIENT_DOMAIN_API: process.env.NEXT_PUBLIC_APP_URL
})

// Check for client-side environment variable validation errors
if (!configClient.success) {
  throw new Error('Environment variables for client not valid!')
}

// Export the validated configurations
export const envClientConfig = configClient.data
