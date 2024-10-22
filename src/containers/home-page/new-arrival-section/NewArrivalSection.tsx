import { useTranslations } from 'next-intl'
import Image from 'next/image'

const NewArrivalSection = () => {
  const t = useTranslations('NewArrivalSection')

  return (
    <section className='my-10 flex flex-col gap-6'>
      <div className='flex items-center gap-2 text-secondary'>
        <div className='relative h-10 w-5'>
          <div className='absolute left-0 top-0 h-10 w-5 rounded bg-secondary'></div>
        </div>
        <p>{t('Featured')}</p>
      </div>
      <div className='flex justify-between gap-20'>
        <div className='flex gap-4'>
          <h3>{t('New Arrival')}</h3>
        </div>
      </div>
      <div className='grid h-[600px] grid-cols-4 grid-rows-2 gap-8'>
        <div className='relative col-span-2 row-span-2 flex items-end rounded-sm bg-black p-8'>
          <Image
            src={'/images/new-arrival/ps5.png'}
            alt='ps5-image'
            width={511}
            height={511}
            className='absolute bottom-0 right-0 z-0'
          />
          <div className='z-10 flex w-60 flex-col gap-4 text-white'>
            <h4>{t('PlayStation 5')}</h4>
            <p>{t('Black and White version of the PS5 coming out on sale')}</p>
            <button className='w-24 border-b py-2 text-white hover:border-secondary hover:text-secondary'>
              {t('Shop Now')}
            </button>
          </div>
        </div>
        <div className='relative col-span-2 row-span-1 flex items-end rounded-sm bg-black p-8'>
          <Image
            src={'/images/new-arrival/women.png'}
            alt='women-collections-image'
            width={432}
            height={286}
            className='absolute bottom-0 right-0 z-0'
          />
          <div className='z-10 flex w-64 flex-col gap-4 text-white'>
            <h4>{t('Women’s Collections')}</h4>
            <p>{t('Featured woman collections that give you another vibe')}</p>
            <button className='w-24 border-b py-2 text-white hover:border-secondary hover:text-secondary'>
              {t('Shop Now')}
            </button>
          </div>
        </div>
        <div className='relative col-span-1 flex items-end justify-center rounded-sm bg-black p-8'>
          <Image
            src={'/images/new-arrival/speakers.png'}
            alt='women-collections-image'
            width={190}
            height={221}
            className='absolute bottom-8 top-8'
          />
          <div className='z-10 flex flex-col gap-2 text-white'>
            <h4>{t('Speakers')}</h4>
            <p>{t('Amazon wireless speakers')}</p>
            <button className='w-24 border-b py-2 text-white hover:border-secondary hover:text-secondary'>
              {t('Shop Now')}
            </button>
          </div>
        </div>
        <div className='relative col-span-1 flex items-end justify-center rounded-sm bg-black p-8'>
          <Image
            src={'/images/new-arrival/gucci.png'}
            alt='gucci-collections-image'
            width={190}
            height={221}
            className='absolute bottom-8 top-8'
          />
          <div className='z-10 flex flex-col gap-2 text-white'>
            <h4>{t('Perfume')}</h4>
            <p>{t('GUCCI INTENSE OUD EDP')}</p>
            <button className='w-24 border-b py-2 text-white hover:border-secondary hover:text-secondary'>
              {t('Shop Now')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewArrivalSection
