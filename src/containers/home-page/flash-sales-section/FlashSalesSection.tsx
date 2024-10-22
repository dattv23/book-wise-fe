'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { Product } from '@/types'
import { ProductCard } from '@/components/Card'
import { CountDown, NextButton, PrevButton } from '@/components'

interface FlashSalesSectionProps {
  data: Product[]
}

const FlashSalesSection: React.FC<FlashSalesSectionProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const t = useTranslations('FlashSalesSection')

  return (
    <section className='my-10 flex flex-col gap-6'>
      <div className='flex items-center gap-2 text-secondary'>
        <div className='relative h-10 w-5'>
          <div className='absolute left-0 top-0 h-10 w-5 rounded bg-secondary'></div>
        </div>
        <p>{t('Today’s')}</p>
      </div>
      <div className='flex justify-between gap-20'>
        <div className='flex gap-4'>
          <h3>{t('Flash Sales')}</h3>
          <CountDown time={212270} />
        </div>
        <div className='flex items-center gap-2'>
          <PrevButton onClick={() => setCurrentIndex((pre) => pre - 1)} disabled={currentIndex == 0} />
          <NextButton onClick={() => setCurrentIndex((pre) => pre + 1)} disabled={currentIndex == data.length - 4} />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
        {data.slice(currentIndex, currentIndex + 4).map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  )
}

export default FlashSalesSection
