import { cart } from '@/mocks/cart'
import CartItem from '@/components/shared/cart-item'
import ShippingInfo from './shipping-info'
import OrderSummary from './order-summary'
import PaymentMethod from './payment-method'
import { Button } from '@/components/ui/button'

const CheckoutPage: React.FC = () => {
  return (
    <main className='grid grid-cols-1 gap-6 px-12 py-6 lg:grid-cols-2'>
      <section className='space-y-4'>
        <h3 className='text-xl font-semibold'>Giỏ hàng</h3>
        <div className='space-y-4 rounded-lg bg-[#f4f3f8] p-6'>
          {cart.map((item) => (
            <CartItem product={item.product} quantity={item.quantity} key={item.product.id} />
          ))}
        </div>
      </section>
      <section className='space-y-4'>
        <h3 className='text-xl font-semibold'>Thanh toán</h3>
        <div className='space-y-6'>
          <ShippingInfo />
          <OrderSummary />
          <PaymentMethod />
          <Button className='w-full' size='lg'>
            Đặt hàng
          </Button>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
