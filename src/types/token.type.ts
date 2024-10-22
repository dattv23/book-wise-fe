import { Role } from '@/configs'

export type TokenPayload = {
  role: Role
  userId: string
  sub: string
  iat: number
  exp: number
}
