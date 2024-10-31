import ShoppingCart from '@/components/icons/ShoppingCart'
import { Button } from '@/components/ui/button'
import { HeartIcon } from '@radix-ui/react-icons'

const IconGroup: React.FC = () => {
  return (
    <div className='flex'>
      <Button className='h-8 w-8 bg-primary p-2 text-black shadow-none hover:bg-[#ccc]'>
        <HeartIcon />
      </Button>
      <Button className='h-8 w-8 bg-primary p-2 shadow-none hover:bg-[#ccc]'>
        <ShoppingCart />
      </Button>
    </div>
  )
}

export default IconGroup
