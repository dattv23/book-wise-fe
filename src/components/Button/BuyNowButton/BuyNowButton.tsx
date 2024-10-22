'use client'

import { Product } from '@/types'
import Button from '../Button'
import { useCartStore } from '@/stores'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'

type BuyNowButtonProps = {
  product: Product
}

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ product }) => {
  const { add } = useCartStore()
  const router = useRouter()
  const t = useTranslations('Form.buttons')

  const handleClickBuyNow = () => {
    add(product)
    router.push('/cart')
  }

  return <Button onClick={handleClickBuyNow}>{t('buyNow')}</Button>
}

export default BuyNowButton
