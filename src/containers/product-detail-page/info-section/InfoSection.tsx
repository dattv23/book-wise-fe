import Image from 'next/image'

import { Button } from '@/components/ui/button'
import RatingStars from '@/components/shared/rating-stars'
import { Product } from '@/@types'
import CartButton from '@/components/shared/cart-button'
import ExpandableText from '@/components/shared/expandable-text'

const InfoSection: React.FC<Product> = (product) => {
  const { authors, thumbnailUrl, name, originalPrice, description } = product

  return (
    <section className='mx-4 mt-8 flex flex-wrap justify-center gap-6 py-8 md:mx-14'>
      <Image
        src={thumbnailUrl}
        alt={name}
        width={300}
        height={400}
        className='h-fit w-full rounded-xl object-fill shadow md:flex-[0.3]'
      />
      <div className='flex w-full flex-col gap-6 md:flex-[0.3] md:py-10'>
        <h4 className='text-4xl'>{name}</h4>
        <p>Tác giả {authors?.map((item) => item.author.name)}</p>
        <p>
          <span className='font-bold'>Trạng thái: </span>
          <span className='text-primary'>Còn hàng</span>
        </p>
        <RatingStars rating={5} />
        <span className='text-3xl text-primary'>{originalPrice.toLocaleString('vi-VN')} đ</span>
        <div className='flex gap-2'>
          <CartButton product={product} variant={'outline'} className='border-primary text-primary'>
            Thêm vào giỏ
          </CartButton>
          <Button>Mua ngay</Button>
        </div>
      </div>
      <div className='flex flex-col gap-4 py-8 md:flex-[0.4]'>
        <h4 className='text-3xl font-bold'>Mô tả sản phẩm</h4>
        <hr />
        <ExpandableText text={description ?? ''} />
      </div>
    </section>
  )
}

export default InfoSection
