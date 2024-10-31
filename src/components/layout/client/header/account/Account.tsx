import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Account = () => {
  const isAuth = true
  return (
    <>
      {isAuth ? (
        <Button>Tài khoản của tôi</Button>
      ) : (
        <Button variant={'secondary'}>
          <Link href='/auth/login'>Đăng nhập</Link>
        </Button>
      )}
    </>
  )
}

export default Account
