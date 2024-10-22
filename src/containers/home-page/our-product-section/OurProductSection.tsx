import { useTranslations } from 'next-intl'

import { Button, ProductCard } from '@/components'
import { Product } from '@/types'
import { Link } from '@/navigation'

type OurProductSectionProps = {
  data: Product[]
}

const OurProductSection = (props: OurProductSectionProps) => {
  const { data } = props
  const t = useTranslations('OurProductSection')

  return (
    <section className='my-10 flex flex-col gap-6'>
      <div className='flex items-center gap-2 text-secondary'>
        <div className='relative h-10 w-5'>
          <div className='absolute left-0 top-0 h-10 w-5 rounded bg-secondary'></div>
        </div>
        <p>{t('Our Products')}</p>
      </div>
      <div className='flex justify-between gap-20'>
        <div className='flex gap-4'>
          <h3>{t('Explore Our Products')}</h3>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
        {data.slice(0, 8).map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Button className='w-64'>
          <Link href={'/product'}>{t('View All Products')}</Link>
        </Button>
      </div>
    </section>
  )
}

export default OurProductSection
