import { HTMLInputTypeAttribute } from 'react'

export type Input = {
  name: string
  type: HTMLInputTypeAttribute
  label?: string
  placeholder?: string
}
