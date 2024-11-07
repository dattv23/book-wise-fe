import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

import { GoogleIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import RegisterForm from '@/components/forms/register-form'

const RegisterPage: React.FC = () => {
  return (
    <main className='m-auto max-w-96 space-y-2'>
      <div className='space-y-2'>
        <h1 className='text-4xl'>Đăng ký</h1>
        <p>Hi, Chào mừng bạn đến với BookWise 🫰</p>
      </div>
      <Button variant={'outline'} className='w-full text-center'>
        <GoogleIcon />
        <span>Đăng ký với Google</span>
      </Button>
      <div className='flex w-full items-center justify-between gap-3'>
        <hr className='w-20' />
        <span className='w-fit text-gray-400'>hoặc Đăng ký với Email</span>
        <hr className='w-20' />
      </div>
      <RegisterForm />
      <div className='flex justify-center gap-2'>
        <p>Bạn đã có tài khoản?</p>
        <Link href={'/auth/login'} className='flex items-center gap-1 text-primary'>
          <span>Đăng nhập</span> <ArrowTopRightIcon />
        </Link>
      </div>
    </main>
  )
}

export default RegisterPage
