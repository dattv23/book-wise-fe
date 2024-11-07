import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const MyAccount = () => {
  return (
    <Button variant={'outline'} className='border-primary text-primary'>
      <Link href={'/auth/login'}>Đăng nhập</Link>
    </Button>
  )
}

export default MyAccount
