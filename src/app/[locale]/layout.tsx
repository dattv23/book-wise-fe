import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { NextIntlClientProvider } from 'next-intl'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

import '@/styles/globals.scss'
import { i18n, Locale } from '@/configs'
import { AuthProvider } from '@/contexts/AuthContext'
import { Container, Footer, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'A e-commerce website'
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <Header />
            <AntdRegistry>
              <Container>{children}</Container>
            </AntdRegistry>
            <Toaster position='top-right' />
            <Footer />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
