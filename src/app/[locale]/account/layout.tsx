import { AccountNavbar } from '@/components/Navbar'

type AccountLayoutProps = {
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className='flex w-full gap-4 py-16'>
      <div className='w-1/3'>
        <AccountNavbar />
      </div>
      <main className='w-2/3'>{children}</main>
    </div>
  )
}

export default AccountLayout
