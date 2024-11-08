// config env
import { z } from 'zod'

// Server-side environment variables schema
const configServerSchema = z.object({
  NODE_ENV: z.string(),
  DOMAIN_API: z.string()
})

// Validate server-side environment variables
const configServer = configServerSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  DOMAIN_API: process.env.DOMAIN_API
})

// Check for server-side environment variable validation errors
if (!configServer.success) {
  console.error('Server environment validation errors:', configServer.error.format())
  throw new Error('Environment variables for server not valid!')
}

// Export the validated configurations
export const envServerConfig = configServer.data
