'use client'

import { useTranslations } from 'next-intl'

import { BoxIcon, CancelIcon, LogoutIcon, ReviewIcon, UserIcon } from '@/components/Icons'
import { Link } from '@/navigation'
import { DropdownItem } from '@/types'
import { useAuthStore } from '@/stores'
import { envClientConfig } from '@/lib/envClient'

const AccountDropdown: React.FC = () => {
  const t = useTranslations('Navbar')
  const { logout } = useAuthStore()

  const items: DropdownItem[] = [
    {
      id: 1,
      href: `/account/my-profile`,
      icon: <UserIcon />,
      name: t('Manage My Account')
    },
    {
      id: 2,
      href: `/account/my-orders?list=completed`,
      icon: <BoxIcon />,
      name: t('My Order')
    },
    {
      id: 3,
      href: `/account/my-orders?list=cancellations`,
      icon: <CancelIcon />,
      name: t('My Cancellations')
    },
    {
      id: 4,
      href: `/reviews`,
      icon: <ReviewIcon />,
      name: t('My Reviews')
    }
  ]

  const handleLogout = async () => {
    await fetch(`${envClientConfig.NEXT_PUBLIC_APP_URL}/api/auth/logout`, {
      cache: 'no-cache'
    })
    localStorage.removeItem('accessToken')
    logout()
  }

  return (
    <div className='invisible absolute right-0 z-50 -mt-1 w-64 origin-top-left divide-y divide-gray-100 rounded-md bg-white opacity-0 shadow-lg transition duration-300 group-hover:visible group-hover:opacity-100'>
      <div className='py-1'>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className='flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
          >
            <span className='h-6 w-6'>{item.icon}</span>
            <span className='font-semibold'>{item.name}</span>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className='flex w-full items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100'
        >
          <LogoutIcon />
          <span>{t('Logout')}</span>
        </button>
      </div>
    </div>
  )
}

export default AccountDropdown
