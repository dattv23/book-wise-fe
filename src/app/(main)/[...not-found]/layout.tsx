import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Page not found'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
