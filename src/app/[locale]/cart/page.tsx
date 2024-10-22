import { unstable_setRequestLocale } from 'next-intl/server'
import dynamic from 'next/dynamic'
import React from 'react'

import { Locale } from '@/configs'

const CartPage = dynamic(async () => await import('@/containers/cart-page'))

type CartProps = {
  params: {
    locale: Locale
  }
}

const Cart: React.FC<CartProps> = ({ params }) => {
  unstable_setRequestLocale(params.locale)
  return <CartPage params={params} />
}

export default Cart
