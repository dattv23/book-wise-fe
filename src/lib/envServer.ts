import { z } from 'zod'

// Server-side environment variables schema
const configServerSchema = z.object({
  DOMAIN: z.string(),
  DOMAIN_API: z.string()
})

// Validate server-side environment variables
const configServer = configServerSchema.safeParse({
  DOMAIN: process.env.DOMAIN,
  DOMAIN_API: process.env.DOMAIN_API
})

// Check for server-side environment variable validation errors
if (!configServer.success) {
  console.error('Server environment validation errors:', configServer.error.format())
  throw new Error('Environment variables for server not valid!')
}

// Export the validated configurations
export const envServerConfig = configServer.data
