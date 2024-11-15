import {
  BookIcon,
  CircuitBoardIcon,
  Command,
  FileText,
  LayoutDashboardIcon,
  LucideIcon,
  PackageIcon,
  UserRoundIcon
} from 'lucide-react'

export type Icon = LucideIcon
export const Icons = {
  logo: Command,
  dashboard: LayoutDashboardIcon,
  client: UserRoundIcon,
  book: BookIcon,
  invoice: FileText,
  warehouse: PackageIcon,
  kanban: CircuitBoardIcon
}
export { default as GoogleIcon } from './GoogleIcon'
