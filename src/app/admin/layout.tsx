import React, { ReactNode } from 'react'
import Link from 'next/link'

import '@/styles/globals.scss'

interface LayoutAdminProps {
  children: ReactNode
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Admin</title>
      </head>
      <body suppressHydrationWarning={true}>
        <div className='flex h-screen bg-gray-100'>
          {/* Sidebar */}
          <aside className='w-64 bg-white shadow-md'>
            <div className='p-4'>
              <h1 className='text-2xl font-semibold'>Admin Panel</h1>
            </div>
            <nav className='mt-6'>
              <Link href='/admin' className='block px-4 py-2 text-gray-600 hover:bg-gray-200'>
                Dashboard
              </Link>
              <Link href='/admin/users' className='block px-4 py-2 text-gray-600 hover:bg-gray-200'>
                Users
              </Link>
              <Link href='/admin/categories' className='block px-4 py-2 text-gray-600 hover:bg-gray-200'>
                Products
              </Link>
              <Link href='/admin/products' className='block px-4 py-2 text-gray-600 hover:bg-gray-200'>
                Products
              </Link>
              <Link href='/admin/orders' className='block px-4 py-2 text-gray-600 hover:bg-gray-200'>
                Orders
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <main className='flex-1 overflow-y-auto p-8'>{children}</main>
        </div>
      </body>
    </html>
  )
}

export default LayoutAdmin
