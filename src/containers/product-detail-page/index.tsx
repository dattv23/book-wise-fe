import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Product } from '@/types'
import { Locale } from '@/configs'
import { BuyNowButton } from '@/components'
import { Delivery1Icon, Return1Icon } from '@/components/Icons'
import { cn, convertPriceByLocale, startScore } from '@/lib/utils'

type ProductDetailPageProps = {
  data: Product
  params: {
    id: string
    locale: Locale
  }
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = async ({ data, params }) => {
  const t = await getTranslations('ProductDetailPage')
  const { locale } = params
  const deliveryPolicies = [
    {
      id: 1,
      name: t('Free Delivery'),
      description: t('Enter your postal code for Delivery Availability'),
      icon: <Delivery1Icon />
    },
    {
      id: 2,
      name: t('Return Delivery'),
      description: t('Free 30 Days Delivery Returns Details'),
      icon: <Return1Icon />
    }
  ]
  return (
    <main className='py-10'>
      <div className='flex flex-col gap-8 lg:flex-row'>
        <div className='flex flex-col gap-4'>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className='relative flex items-center justify-center bg-[#f5f5f5] px-9 py-10'>
              <Image src={data.imageUrl} alt={data.name} width={134} height={94} />
            </div>
          ))}
        </div>

        <div className='relative flex items-center justify-center bg-[#f5f5f5] px-10 py-9'>
          <Image src={data.imageUrl} alt={data.name} width={446} height={315} />
        </div>

        <div className='flex-1'>
          <h1 className='text-2xl font-bold'>{data.name}</h1>
          <div className='mb-2 flex items-center gap-3'>
            <div className='flex items-center text-yellow-500'>
              <span>{startScore(data?.rate ?? 0)}</span>
            </div>
            <span className='text-muted-foreground ml-2'>{`(${data?.number_of_rate ?? 0} ${t('Reviews')})`}</span>
            <span className={cn('ml-2', data.stockQuantity > 0 ? 'text-green-500' : 'text-error')}>
              {data.stockQuantity > 0 ? t('In Stock') : t('Sold Out')}
            </span>
          </div>
          <p className='mb-4 text-2xl font-bold'>{convertPriceByLocale(data.regularPrice, locale)}</p>
          <p className='text-muted-foreground mb-4'>{t('Description')}</p>
          <div className='min-w-full divide-y'>
            <BuyNowButton product={data} />
          </div>
          <div className='border-zinc-300 pt-4'>
            <div className='mb-2 flex flex-col gap-2'>
              {deliveryPolicies.map((item) => (
                <div className='flex items-center gap-2' key={item.id}>
                  {item.icon}
                  <div className='text-muted-foreground mb-4'>
                    <h3 className='mt-2 text-sm'>{item.name}</h3>
                    <p className='mt-2 text-sm'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-20 flex items-center gap-2 text-secondary">
        <div className="relative h-10 w-5">
          <div className="absolute left-0 top-0 h-10 w-5 rounded bg-secondary"></div>
        </div>
        <p>{t('Related Item')}</p>
      </div>
      <BestSellerSection data={products.slice(0, 4)} /> */}
      {/* <hr /> */}
    </main>
  )
}

export default ProductDetailPage
