import Logo from '@/components/shared/logo'
import NavBar from '@/components/shared/nav-bar'
import CartButton from '@/components/shared/cart-button'
import MyAccount from '@/components/shared/my-account/MyAccount'

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between border-b bg-[#f4f3f8] px-6 py-2 md:px-14'>
      <Logo />
      <NavBar />
      <div className='flex items-center gap-2'>
        <CartButton />
        <MyAccount />
      </div>
    </header>
  )
}

export default Header
