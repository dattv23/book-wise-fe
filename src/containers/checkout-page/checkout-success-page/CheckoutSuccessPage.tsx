import { Button } from '@/components/ui/button'
import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function CheckoutSuccessPage() {
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col overflow-hidden rounded-lg bg-gray-100 sm:flex-row md:h-[33rem]'>
          <div className='order-first h-56 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5'>
            <Image
              src='/images/checkout-success.png'
              loading='lazy'
              alt='Photo'
              className='h-full w-full object-cover object-center'
              width={16}
              height={9}
              layout='responsive'
            />
          </div>
          <div className='flex w-full flex-col p-4 text-center sm:w-1/2 sm:p-8 lg:w-3/5'>
            <div className='flex justify-center'>
              <svg width='200' height='200'>
                <circle
                  fill='none'
                  stroke='#68E534'
                  strokeWidth='10'
                  cx='100'
                  cy='100'
                  r='95'
                  strokeLinecap='round'
                  transform='rotate(-90 100 100)'
                  className={style.circle}
                />
                <polyline
                  fill='none'
                  stroke='#68E534'
                  points='44,107 87,142 152,69'
                  strokeWidth='18'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={style.tick}
                />
              </svg>
            </div>
            <h2 className='my-5 text-xl font-bold text-green-900 md:text-2xl lg:text-4xl'>Đặt hàng thành công</h2>

            <p className='mb-8 text-gray-600'>Cảm ơn bạn đã mua hàng tại BookWise!</p>

            <Button className='float-end mx-auto mt-auto w-48'>
              <Link href='/'>Quay lại trang chủ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
