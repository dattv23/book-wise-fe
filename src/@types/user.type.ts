/* eslint-disable no-unused-vars */
export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type User = {
  id: string
  email: string
  name: string
  role: Role
}