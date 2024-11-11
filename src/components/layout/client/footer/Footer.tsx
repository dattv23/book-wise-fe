import SubscribeForm from '@/components/forms/subscribe-form'
import CartButton from '@/components/shared/cart-button'
import Logo from '@/components/shared/logo'
import MyAccount from '@/components/shared/my-account/MyAccount'
import NavBar from '@/components/shared/nav-bar'
import { Button } from '@/components/ui/button'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col gap-6 bg-[#0e0e2a] px-6 py-8 text-white md:px-14'>
      <div className='flex items-center justify-between text-white'>
        <Logo />
        <NavBar />
        <div className='flex items-center gap-2'>
          <CartButton />
          <MyAccount />
        </div>
      </div>
      <hr className='border-primary opacity-30' />
      <SubscribeForm />
      <hr className='border-primary opacity-30' />
      <div className='flex items-center justify-between'>
        <p>
          <span className='mr-2'>© 2024 dattv23</span>
          Copyright All Right Reserved
        </p>
        <div className='flex gap-2'>
          <Button size={'icon'} aria-label='twitter-button-link'>
            <TwitterLogoIcon />
          </Button>
          <Button size={'icon'} aria-label='instagram-button-link'>
            <InstagramLogoIcon />
          </Button>
          <Button size={'icon'} aria-label='linkedin-button-link'>
            <LinkedInLogoIcon />
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
