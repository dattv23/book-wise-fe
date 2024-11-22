'use client'

import Link from 'next/link'
import { LogOutIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth.store'
import { logoutAction } from '@/server-actions'
import { useToast } from '@/hooks/use-toast'
import { useCartStore } from '@/store/cart.store'

const MyAccount: React.FC = () => {
  const { user, clear } = useAuthStore()
  const { removeAll } = useCartStore()
  const { toast } = useToast()

  async function handleLogout() {
    const { success } = await logoutAction()
    clear()
    removeAll()
    if (!success) {
      toast({ variant: 'destructive', title: 'Đăng xuất thất bại!' })
      return
    }
    toast({ title: 'Đăng xuất thành công!' })
  }

  return (
    <>
      {user ? (
        <div className='flex items-center gap-2'>
          <p>
            Xin chào, <span className='font-bold'>{user.name}</span>
          </p>
          <Button size={'icon'} variant={'outline'} className='bg-inherit text-inherit' onClick={handleLogout}>
            <LogOutIcon />
          </Button>
        </div>
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
