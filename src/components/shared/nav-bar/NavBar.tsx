'use client'

import Link from 'next/link'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { navItems } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NavBar: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleNavbar = () => {
    setIsToggled((prev) => !prev)
  }

  return (
    <nav className='relative'>
      <Button size={'icon'} onClick={toggleNavbar} className='inline-flex md:hidden'>
        {isToggled ? <XIcon /> : <MenuIcon />}
      </Button>
      <ul
        className={cn(
          'gap-4 text-black md:flex',
          isToggled
            ? 'absolute left-0 top-11 z-10 flex w-32 flex-col rounded-md border border-primary bg-white p-4 text-left'
            : 'hidden md:flex'
        )}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.path} className='hover:text-primary'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
