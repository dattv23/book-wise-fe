import { useTranslations } from 'next-intl'

import { Button } from '@/components'
import Image from 'next/image'

const AdsSection = () => {
  const t = useTranslations('AdsSection')
  const countDownTranslation = useTranslations('CountDown')
  return (
    <section className='my-10 flex h-[500px] items-center bg-black p-11'>
      <div className='flex flex-[0.5] flex-col justify-evenly gap-8'>
        <h4 className='text-success'>{t('Categories')}</h4>
        <h2 className='text-5xl font-semibold text-white'>{t('Enhance Your Music Experience')}</h2>
        <div className='flex gap-6'>
          <div className='flex h-20 w-20 flex-col justify-center gap-1 rounded-full bg-white p-2 text-center leading-4 text-black'>
            <strong>05</strong>
            <span>{countDownTranslation('Days')}</span>
          </div>
          <div className='flex h-20 w-20 flex-col justify-center gap-1 rounded-full bg-white p-2 text-center leading-4 text-black'>
            <strong>23</strong>
            <span>{countDownTranslation('Hours')}</span>
          </div>
          <div className='flex h-20 w-20 flex-col justify-center gap-1 rounded-full bg-white p-2 text-center leading-4 text-black'>
            <strong>59</strong>
            <span>{countDownTranslation('Minutes')}</span>
          </div>
          <div className='flex h-20 w-20 flex-col justify-center gap-1 rounded-full bg-white p-2 text-center leading-4 text-black'>
            <strong>35</strong>
            <span>{countDownTranslation('Seconds')}</span>
          </div>
        </div>
        <Button className='w-44 bg-[#00FF66]'>{t('Buy Now!')}</Button>
      </div>
      <div className='flex-[0.5]'>
        <Image src={'/images/ads/jbl.png'} alt='ads-image' width={568} height={330} />
      </div>
    </section>
  )
}

export default AdsSection
