import { User } from './user.type'

type ApiResponse<T> = {
  statusCode: number
  message: string
  data: T
  dateTime: string
  errors?: Record<string, string>[]
}

export type LoginResponse = ApiResponse<{
  user: User
  tokens: {
    access: {
      token: string
      expires: string
    }
    refresh: {
      token: string
      expires: string
    }
  }
}>
