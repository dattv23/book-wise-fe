import { Modal } from 'antd'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Product } from '@/types'
import { Link } from '@/navigation'
import { Button } from '@/components/Button'
import { calculateDiscountedPrice, convertPriceByLocale } from '@/lib/utils'
import { Locale } from '@/configs'

type ProductDetailModalProps = {
  data: Product
  isOpen: boolean
  locale: Locale
  onClose: () => void
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, data, locale }) => {
  const t = useTranslations('ProductDetailModal')
  return (
    <Modal
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width='auto'
      classNames={{
        content: 'max-w-[800px]'
      }}
    >
      <div className='flex w-full flex-col gap-4 p-5 lg:flex-row'>
        <div className='flex flex-[0.5] items-center justify-center'>
          <Image src={data.imageUrl} alt={`${data.name} Image`} width={320} height={320} />
        </div>
        <div className='flex flex-[0.5] flex-col justify-between gap-2'>
          <div>
            <h2>{data.name}</h2>
            <p className='text-base'>{data.description}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-lg font-semibold'>{`${t('Price')}: ${convertPriceByLocale(calculateDiscountedPrice(data.regularPrice, data?.discount ?? 0), locale)}`}</h4>
            <Button>
              <Link href={'/cart'} className='text-white hover:text-white'>
                {t('Shop now')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProductDetailModal
