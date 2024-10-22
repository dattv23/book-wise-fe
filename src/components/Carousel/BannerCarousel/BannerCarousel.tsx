'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/Icons'

interface BannerCarouselProps {
  images: string[]
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) => (prevImg === images.length - 1 ? 0 : prevImg + 1))
    }, 3 * 1000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className='relative flex w-full items-center'>
      <button
        className='absolute left-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ccc] p-2 hover:bg-secondary'
        onClick={() => setCurrentImg((pre) => (pre == 0 ? images.length - 1 : pre - 1))}
      >
        <ArrowLeftIcon />
      </button>
      <div className='h-[344px] flex-1'>
        <Image
          src={images[currentImg]}
          width={892}
          height={344}
          alt={`banner-${currentImg}`}
          className='h-full w-full'
          priority
        />
      </div>
      <button
        className='absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ccc] p-2 hover:bg-secondary'
        onClick={() => setCurrentImg((pre) => (pre == images.length - 1 ? 0 : pre + 1))}
      >
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export default BannerCarousel
