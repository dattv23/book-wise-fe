import { useTranslations } from 'next-intl'

import { Button, ProductCard } from '@/components'
import { Link } from '@/navigation'
import { Product } from '@/types'

type BestSellerSectionProps = {
  data: Product[]
}

const BestSellerSection = (props: BestSellerSectionProps) => {
  const { data } = props
  const t = useTranslations('BestSellerSection')
  return (
    <section className='my-10 flex flex-col gap-6'>
      <div className='flex items-center gap-2 text-secondary'>
        <div className='relative h-10 w-5'>
          <div className='absolute left-0 top-0 h-10 w-5 rounded bg-secondary'></div>
        </div>
        <p>{t('This Month')}</p>
      </div>
      <div className='flex justify-between gap-20'>
        <h3>{t('Best Selling Products')}</h3>
        <Button variant={'primary'}>
          <Link href={'/products'}>{t('View All')}</Link>
        </Button>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
        {data.slice(0, 8).map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </section>
  )
}

export default BestSellerSection
