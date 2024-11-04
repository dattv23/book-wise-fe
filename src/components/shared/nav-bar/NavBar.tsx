import Link from 'next/link'

import { navItems } from '@/lib/constants'

const NavBar: React.FC = () => {
  return (
    <ul className='flex gap-4'>
      {navItems.map((item) => (
        <li key={item.id}>
          <Link href={item.path} className='hover:text-primary'>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar
