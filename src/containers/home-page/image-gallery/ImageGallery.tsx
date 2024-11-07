import Image from 'next/image'

import styles from './ImageGallery.module.css'

const galleries = [
  {
    id: 1,
    imageUrl: '/images/gallery-1.jpg',
    alt: 'Library view'
  },
  {
    id: 2,
    imageUrl: '/images/gallery-2.jpg',
    alt: 'Stack of books'
  },
  {
    id: 3,
    imageUrl: '/images/gallery-3.jpg',
    alt: 'Reading position'
  },
  {
    id: 4,
    imageUrl: '/images/gallery-4.jpg',
    alt: 'Book shelf'
  }
]

const ImageGallery = () => {
  return (
    <div className='mb-12 grid grid-cols-2 gap-4 px-2 lg:grid-cols-4'>
      {galleries.map((item) => (
        <div key={item.id} className={styles['image-card']}>
          <Image
            src={item.imageUrl}
            alt={item.alt}
            width={400}
            height={300}
            className='h-full w-full rounded-lg object-cover'
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
