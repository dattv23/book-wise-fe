'use client'

import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth.store'
import Link from 'next/link'

const MyAccount: React.FC = () => {
  const { user } = useAuthStore()

  return (
    <>
      {user ? (
        <p>
          Xin chào, <span className='font-bold'>{user.name}</span>
        </p>
      ) : (
        <Link href={'/auth/login'}>
          <Button variant={'outline'} className='border-primary text-primary'>
            Đăng nhập
          </Button>
        </Link>
      )}
    </>
  )
}

export default MyAccount
