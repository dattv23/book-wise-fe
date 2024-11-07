import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

import LoginForm from '@/components/forms/login-form'
import { GoogleIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'

const LoginPage: React.FC = () => {
  return (
    <main className='m-auto max-w-96 space-y-4 px-4'>
      <div className='space-y-2'>
        <h1 className='text-4xl'>Đăng nhập</h1>
        <p>Hi, Chào mừng bạn trở lại 🫰</p>
      </div>
      <Button variant={'outline'} className='w-full text-center'>
        <GoogleIcon />
        <span>Đăng nhập với Google</span>
      </Button>
      <div className='flex w-full items-center justify-between gap-3'>
        <hr className='w-20' />
        <span className='w-fit text-gray-400'>hoặc Đăng nhập với Email</span>
        <hr className='w-20' />
      </div>
      <LoginForm />
      <div className='flex justify-center gap-2'>
        <p>Bạn chưa có tài khoản?</p>
        <Link href={'/auth/register'} className='flex items-center gap-1 text-primary'>
          <span>Đăng ký tài khoản</span> <ArrowTopRightIcon />
        </Link>
      </div>
    </main>
  )
}

export default LoginPage
