import { Icons } from '@/components/icons'

export type NavItem = {
  title: string
  url: string
  disabled?: boolean
  external?: boolean
  shortcut?: [string, string]
  icon?: keyof typeof Icons
  label?: string
  description?: string
  isActive?: boolean
  items?: NavItem[]
}
