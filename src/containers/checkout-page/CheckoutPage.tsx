import dynamic from 'next/dynamic'

const CartList = dynamic(() => import('./cart-list'))
const ShippingInfo = dynamic(() => import('./shipping-info'))
const PaymentMethod = dynamic(() => import('./payment-method'), { ssr: false })
const OrderButton = dynamic(() => import('./order-button'))
const CheckoutPage: React.FC = () => {
  return (
    <main className='grid grid-cols-1 gap-6 px-12 py-6 lg:grid-cols-2'>
      <section className='space-y-4'>
        <h3 className='text-xl font-semibold'>Giỏ hàng</h3>
        <CartList />
      </section>
      <section className='space-y-4'>
        <h3 className='text-xl font-semibold'>Thanh toán</h3>
        <div className='space-y-6'>
          <ShippingInfo />
          <PaymentMethod />
          <OrderButton />
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
