'use client'

import { Product } from '@/@types'
import { useToast } from '@/hooks/use-toast'
import { Button, ButtonProps } from '@/components/ui/button'
import { useCartStore } from '@/store/cart.store'

type CartButtonProps = ButtonProps & {
  product: Product
  children: React.ReactNode
}

const CartButton: React.FC<CartButtonProps> = ({ children, product, ...props }) => {
  const { addItem, checkIsExist } = useCartStore()
  const { toast } = useToast()

  const handleAddProductToCart = () => {
    if (checkIsExist(product.id)) {
      toast({
        title: 'Sản phẩm đã nằm trong giỏ hàng',
        variant: 'destructive'
      })
      return
    }
    addItem(product)
    toast({
      title: 'Thêm sản phẩm vào giỏ hàng',
      description: 'Sản phẩm đã được thêm vào giỏ hàng',
      variant: 'default'
    })
  }

  return (
    <Button {...props} onClick={handleAddProductToCart}>
      {children}
    </Button>
  )
}

export default CartButton
