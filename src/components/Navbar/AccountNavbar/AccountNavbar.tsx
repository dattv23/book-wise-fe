'use client'

import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'
import { Link, usePathname } from '@/navigation'

const AccountNavbar = () => {
  const t = useTranslations('AccountNavbar')
  const pathName = usePathname()

  const managementList = [
    {
      name: t('Manage My Account'),
      items: [
        { name: t('My Profile'), href: '/account/my-profile' },
        { name: t('Address Book'), href: '/account/address-book' },
        { name: t('My Payment Options'), href: '/account/payments' }
      ]
    },
    {
      name: t('My Order'),
      items: [
        { name: t('My Completed'), href: '/account/my-orders?list=completed' },
        { name: t('My Returns'), href: '/account/my-orders?list=returns' },
        {
          name: t('My Cancellations'),
          href: '/account/my-orders?my-orders=cancellations'
        }
      ]
    }
  ]

  return (
    <nav className='flex flex-col gap-4'>
      {managementList.map((management, id) => (
        <div key={id}>
          <h4 className='mb-2'>{management.name}</h4>
          <ul className='flex flex-col gap-1'>
            {management.items.map((item, id) => (
              <li key={id} className='ml-10'>
                <Link href={item.href} className={cn(pathName.includes(item.href) && 'text-secondary')}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default AccountNavbar
