import { NavItem } from '@/@types'

export const navItems = [
  {
    id: 1,
    name: 'Trang chủ',
    path: '/'
  },
  {
    id: 2,
    name: 'Danh mục',
    path: '/categories'
  },
  {
    id: 3,
    name: 'Cửa hàng',
    path: '/products'
  },
  {
    id: 4,
    name: 'Tác giả',
    path: '/authors'
  },
  {
    id: 5,
    name: 'Blog',
    path: '/blog'
  }
]

export const navItemsAdmin: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'User',
    url: '/admin/users',
    icon: 'client',
    shortcut: ['u', 'u'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Product',
    url: '/admin/products',
    icon: 'book',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Invoices',
    url: '/admin/invoices',
    icon: 'invoice',
    shortcut: ['i', 'i'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Warehouse',
    url: '/admin/warehouse',
    icon: 'warehouse',
    shortcut: ['w', 'w'],
    isActive: false,
    items: [] // No child items
  }
]
