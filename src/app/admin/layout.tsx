import '@public/styles/globals.css'
import KBar from '@/components/kbar/Kbar'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/layout/admin/app-sidebar'
import Header from '@/components/layout/admin/header'
import { Toaster } from '@/components/ui/sonner'
import { Suspense } from 'react'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'Book Wise',
  description: 'Generated by create next app'
}

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = cookies()
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'
  return (
    <html>
      <body className='overflow-hidden'>
        <NuqsAdapter>
          <KBar>
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <SidebarInset>
                <Header />
                {/* page main content */}
                <Suspense fallback={<Loading />}>{children}</Suspense>
                {/* page main content ends */}
              </SidebarInset>
            </SidebarProvider>
          </KBar>
        </NuqsAdapter>
        <Toaster />
      </body>
    </html>
  )
}
