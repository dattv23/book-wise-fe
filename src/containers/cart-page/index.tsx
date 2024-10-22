import { cookies } from 'next/headers'
import { getTranslations } from 'next-intl/server'

import { Link, redirect } from '@/navigation'
import { CartTable } from '@/components/Tables'
import { ApplyCouponForm, Button } from '@/components'
import { envServerConfig } from '@/lib/envServer'
import { CartItem } from '@/types'
import { calculateDiscountedPrice, convertPriceByLocale } from '@/lib/utils'
import { Locale } from '@/configs'

async function getData() {
  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')?.value
  if (!token) {
    redirect('/auth/sign-in')
  }
  const res = await fetch(`${envServerConfig.DOMAIN_API}/api/v1/carts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    cache: 'no-cache'
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type CartPageProps = {
  params: {
    locale: Locale
  }
}

const CartPage: React.FC<CartPageProps> = async ({ params }) => {
  const res = await getData()
  const cart: CartItem[] = res.data
  const t = await getTranslations('CartPage')

  const total = cart.reduce(
    (pre, cur) => pre + calculateDiscountedPrice(cur.product.regularPrice, cur.product?.discount ?? 0) * cur.quantity,
    0
  )

  return (
    <main className='py-10'>
      <CartTable data={cart} />
      <div className='mt-8 flex flex-1 justify-between'>
        <div className='flex-[0.4]'>
          <ApplyCouponForm />
        </div>
        <div className='flex flex-[0.4] flex-col gap-8 rounded-md border-2 border-black px-6 py-8'>
          <h4>{t('Cart Total')}</h4>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <p>{t('Subtotal')}</p>
              <p>{convertPriceByLocale(total, params.locale)}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>{t('Shipping')}</p>
              <p></p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>{t('Total')}</p>
              <p>{convertPriceByLocale(total, params.locale)}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button>
              <Link href={'/checkout'}>{t('Process to checkout')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CartPage
