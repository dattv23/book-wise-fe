import Logo from '@/components/shared/logo'
import NavBar from '@/components/shared/nav-bar'
import CartDrawer from '@/components/shared/cart-drawer'
import MyAccount from '@/components/shared/my-account/MyAccount'

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between border-b bg-[#f4f3f8] px-6 py-2 md:px-14'>
      <Logo />
      <NavBar />
      <div className='flex items-center gap-2'>
        <CartDrawer />
        <MyAccount />
      </div>
    </header>
  )
}

export default Header
