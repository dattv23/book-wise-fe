'use client'

import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const NotFound: React.FC = () => {
  const pathName = usePathname()

  const handleBackHome = () => {
    window.location.href = '/'
  }

  return (
    <main className='my-20 flex flex-col items-center justify-center gap-10'>
      <h1>404 Not Found</h1>
      <Button variant={'link'} onClick={handleBackHome}>
        {pathName === '/' ? 'Refresh' : 'Trở về trang chủ'}
      </Button>
    </main>
  )
}

export default NotFound