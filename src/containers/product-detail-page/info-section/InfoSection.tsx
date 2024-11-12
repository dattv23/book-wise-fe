import Image from 'next/image'

import { Button } from '@/components/ui/button'
import RatingStars from '@/components/shared/rating-stars'
import { Product } from '@/@types'

const InfoSection: React.FC<Product> = ({ info }) => {
  const { title, imageUrl, author, currentPrice } = info
  return (
    <section className='mx-4 mt-8 flex flex-wrap justify-center gap-6 py-8 md:mx-14'>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={400}
        className='w-full rounded-xl object-fill shadow md:flex-[0.3]'
      />
      <div className='flex w-full flex-col gap-6 md:flex-[0.3] md:py-10'>
        <h4 className='text-4xl'>{title}</h4>
        <p>Tác giả {author}</p>
        <p>
          <span className='font-bold'>Trạng thái: </span>
          <span className='text-primary'>Còn hàng</span>
        </p>
        <RatingStars rating={5} />
        <span className='text-3xl text-primary'>{currentPrice.toLocaleString('vi-VN')} đ</span>
        <div className='flex gap-2'>
          <Button variant={'outline'} className='border-primary text-primary'>
            Thêm vào giỏ
          </Button>
          <Button>Mua ngay</Button>
        </div>
      </div>
      <div className='flex flex-col gap-4 py-8 md:flex-[0.4]'>
        <h4 className='text-3xl font-bold'>Mô tả sản phẩm</h4>
        <hr />
        {/* <p>{description}</p> */}
        <p>Chưa có mô tả sản phẩm</p>
      </div>
    </section>
  )
}

export default InfoSection
