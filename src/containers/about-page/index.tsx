import Image from 'next/image'
import { useTranslations } from 'next-intl'

import {
  InstagramIcon,
  LinkedinIcon,
  MoneyBagIcon,
  SaleIcon,
  ShopIcon,
  ShoppingBagIcon,
  TwitterIcon
} from '@/components/Icons'
import { ServiceList } from '@/components'

const AboutPage: React.FC = () => {
  const t = useTranslations('AboutPage')

  const members = [
    {
      id: 1,
      avatar: '/images/about-us/Tom Cruise.png',
      name: 'Tom Cruise',
      position: t('Founder')
    },
    {
      id: 2,
      avatar: '/images/about-us/Emma Watson.png',
      name: 'Emma Watson',
      position: t('Managing Director')
    },
    {
      id: 3,
      avatar: '/images/about-us/Will Smith.png',
      name: 'Will Smith',
      position: t('Product Designer')
    }
  ]

  const statistics = [
    { icon: <ShopIcon />, data: 10.5, name: t('Sellers active our site') },
    { icon: <SaleIcon />, data: 33, name: t('Monthly Product Sale') },
    {
      icon: <ShoppingBagIcon color='white' backgroundColor='black' />,
      data: 45.5,
      name: t('Customer active in our site')
    },
    {
      icon: <MoneyBagIcon />,
      data: 25,
      name: t('Annual gross sale in our site')
    }
  ]

  return (
    <main className='container mx-auto'>
      <div className='mb-32 flex flex-col items-center gap-12 md:flex-row'>
        <div className='py-32 md:mb-0 md:w-1/2'>
          <h1 className='mb-10 text-3xl font-bold'>{t('Our Story')}</h1>
          <p className='mb-4 text-zinc-700'>{t('Description')}</p>
          <p className='text-zinc-700'>{t('MoreDescription')}</p>
        </div>
        <div className='md:w-1/2'>
          <Image src={'/images/about-us/About.png'} alt='About' width={919} height={756} />
        </div>
      </div>
      <div className='mb-32 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {statistics.map((statistic, id) => (
          <div
            key={id}
            className='flex flex-col items-center gap-6 rounded-lg border p-8 hover:border-none hover:bg-secondary hover:text-white'
          >
            <div className='flex h-20 w-20 items-center justify-center rounded-full bg-[#c1c1c1]'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black'>{statistic.icon}</div>
            </div>
            <div className='text-center'>
              <h2 className='text-xl font-bold'>{`${statistic.data}k`}</h2>
              <p className='text-inherit text-zinc-600'>{statistic.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mb-32 grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {members.map((member) => (
          <div key={member.id} className='flex flex-col items-center'>
            <div className='flex w-full justify-center rounded-sm bg-[#f5f5f5] pt-9'>
              <Image src={member.avatar} alt={member.name} width={326} height={397} className='h-[397px] w-auto' />
            </div>
            <div className='mt-2 w-full text-left'>
              <h3 className='text-xl font-bold'>{member.name}</h3>
              <p className='text-zinc-600'>{member.position}</p>
            </div>
            <div className='flex w-full items-center justify-start gap-2'>
              <button className='p-2 hover:opacity-80'>
                <TwitterIcon backgroundColor='white' color='black' />
              </button>
              <button className='p-2 hover:opacity-80'>
                <InstagramIcon backgroundColor='white' color='black' />
              </button>
              <button className='p-2 hover:opacity-80'>
                <LinkedinIcon backgroundColor='white' color='black' />
              </button>
            </div>
          </div>
        ))}
      </div>
      <section className='my-32'>
        <ServiceList />
      </section>
    </main>
  )
}

export default AboutPage
