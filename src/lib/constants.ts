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
    title: 'Users',
    url: '/admin/users',
    icon: 'client',
    shortcut: ['u', 'u'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Products',
    url: '/admin/products',
    icon: 'book',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Orders',
    url: '/admin/orders',
    icon: 'invoice',
    shortcut: ['o', 'o'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Reviews',
    url: '/admin/reviews',
    icon: 'client',
    shortcut: ['w', 'w'],
    isActive: false,
    items: [] // No child items
  }
]

export const ACCESS_TOKEN = 'access_token'
export const REFRESH_TOKEN = 'refresh_token'
