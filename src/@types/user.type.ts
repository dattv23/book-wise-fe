/* eslint-disable no-unused-vars */
export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type User = {
  userId: string
  email: string
  password: string
  name: string
  role: Role
}
