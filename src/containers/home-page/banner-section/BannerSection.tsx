import dynamic from 'next/dynamic'

const BannerCarousel = dynamic(() => import('@/components/Carousel/BannerCarousel'), { ssr: false })

const BannerSection: React.FC = () => {
  return (
    <section className='my-10 mb-14 flex justify-center'>
      <BannerCarousel
        images={[
          '/images/banners/banner-1.jpg',
          '/images/banners/banner-2.jpg',
          '/images/banners/banner-3.jpg',
          '/images/banners/banner-4.jpg'
        ]}
      />
    </section>
  )
}

export default BannerSection
