import Image from 'next/image'

import { Button } from '@/components/ui/button'
import RatingStars from '@/components/shared/rating-stars'

type InfoSectionProps = {
  imageUrl: string
  title: string
  author: string
  rating: number
  price: number
  description: string
}

const InfoSection: React.FC<InfoSectionProps> = ({ author, description, price, imageUrl, rating, title }) => {
  return (
    <section className='mx-14 mt-8 flex flex-wrap gap-6 py-8'>
      <Image src={imageUrl} alt={title} width={300} height={400} className='flex-[0.3] rounded-xl object-fill shadow' />
      <div className='flex flex-[0.3] flex-col gap-6 py-10'>
        <h4 className='text-4xl'>{title}</h4>
        <p>Tác giả {author}</p>
        <p>
          <span className='font-bold'>Trạng thái: </span>
          <span className='text-primary'>Còn hàng</span>
        </p>
        <RatingStars rating={rating} />
        <span className='text-3xl text-primary'>{price.toLocaleString('vi-VN')} đ</span>
        <div className='flex gap-2'>
          <Button variant={'outline'} className='border-primary text-primary'>
            Thêm vào giỏ
          </Button>
          <Button>Mua ngay</Button>
        </div>
      </div>
      <div className='mx-14 flex flex-[0.4] flex-col gap-4 py-8'>
        <h4 className='text-3xl font-bold'>Mô tả sản phẩm</h4>
        <hr />
        <p>{description}</p>
      </div>
    </section>
  )
}

export default InfoSection
