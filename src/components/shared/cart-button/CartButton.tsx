import { ShoppingCartIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const CartButton: React.FC = () => {
  return (
    <Button size={'icon'}>
      <ShoppingCartIcon />
    </Button>
  )
}

export default CartButton
