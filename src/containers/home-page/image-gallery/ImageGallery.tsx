import Image from 'next/image'

import styles from './ImageGallery.module.css'

const ImageGallery = () => {
  return (
    <div className='mb-12 grid grid-cols-4 gap-4'>
      <div className={styles['image-card']}>
        <Image
          src='/images/gallery-1.jpg'
          alt='Library view'
          width={400}
          height={300}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className={styles['image-card']}>
        <Image
          src='/images/gallery-2.jpg'
          alt='Stack of books'
          width={400}
          height={300}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className={styles['image-card']}>
        <Image
          src='/images/gallery-3.jpg'
          alt='Reading position'
          width={400}
          height={300}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
      <div className={styles['image-card']}>
        <Image
          src='/images/gallery-4.jpg'
          alt='Book shelf'
          width={400}
          height={300}
          className='h-full w-full rounded-lg object-cover'
        />
      </div>
    </div>
  )
}

export default ImageGallery
