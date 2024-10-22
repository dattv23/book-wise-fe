import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { FacebookIcon, InstagramIcon, LinkedinIcon, SendIcon, TwitterIcon } from '@/components/Icons'
import { Link } from '@/navigation'

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className='bottom-0 bg-black pb-6 pt-20 text-white'>
      <div className='flex flex-wrap justify-evenly gap-5 px-2 pb-[60px] lg:px-28'>
        <div>
          <h3 className='mb-6'>Exclusive</h3>
          <h4 className='mb-2'>{t('Subscribe')}</h4>
          <div className='flex flex-col gap-4'>
            <p>{t('Get 10% off your first order')}</p>
            <div className='flex'>
              <input
                type='text'
                placeholder='Enter your email'
                className='w-full rounded-md border-2 border-white bg-transparent px-4 py-3'
              />
              <button className='my-auto -ml-8 h-full'>
                <SendIcon color='white' />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h4 className='mb-6'>Support</h4>
          <div className='flex flex-col gap-4'>
            <p>{t('Thu Duc, Ho Chi Minh City')}</p>
            <p>exclusive@gmail.com</p>
            <p>+84836129815</p>
          </div>
        </div>
        <div>
          <h4 className='mb-6'>{t('Account')}</h4>
          <div className='flex flex-col gap-4'>
            <Link href={'/account'} className='hover:text-secondary'>
              {t('My Account')}
            </Link>
            <div>
              <Link className='hover:text-secondary' href={'/auth/sign-in'}>
                {t('Login')}
              </Link>{' '}
              /{' '}
              <Link className='hover:text-secondary' href={'/auth/sign-up'}>
                {t('Register')}
              </Link>
            </div>
            <Link className='hover:text-secondary' href={'/cart'}>
              {t('Cart')}
            </Link>
            <Link className='hover:text-secondary' href={'/wishlist'}>
              {t('Wishlist')}
            </Link>
            <Link className='hover:text-secondary' href={'/products'}>
              {t('Shop')}
            </Link>
          </div>
        </div>
        <div>
          <h4 className='mb-6'>{t('Quick Link')}</h4>
          <div className='flex flex-col gap-4'>
            <Link className='hover:text-secondary' href={'/privacy-policy'}>
              {t('Privacy Policy')}
            </Link>
            <Link className='hover:text-secondary' href={'/terms'}>
              {t('Terms Of Use')}
            </Link>
            <Link className='hover:text-secondary' href={'/fag'}>
              FAQ
            </Link>
            <Link className='hover:text-secondary' href={'/contact'}>
              {t('Contact')}
            </Link>
          </div>
        </div>
        <div className='w-[300px]'>
          <h4 className='mb-6'>{t('Download App')}</h4>
          <p>{t('Save $3 with App New User Only')}</p>
          <div className='mt-2'>
            <div className='flex gap-4'>
              <Image
                width={112}
                height={36}
                src={'/images/appstore.png'}
                alt='Download with appstore'
                className='h-9 w-28'
              />
              <Image
                src={'/images/chplay.png'}
                alt='Download with chplay'
                width={112}
                height={36}
                className='h-9 w-28'
              />
            </div>
          </div>
          <div className='mt-6 flex gap-6'>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <hr className='text-white opacity-40' />
      <div className='pt-4 text-center'>
        <p>Copyright Dat Dev 2024. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
