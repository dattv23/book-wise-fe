import React from 'react'
import BannerSection from './banner-section'
import ImageGallery from './image-gallery'
import FeaturesSection from './features-section'
import FeaturedBooksSection from './featured-books-section'

const HomePage: React.FC = () => {
  return (
    <main className='mx-auto max-w-7xl p-6'>
      <BannerSection />
      <ImageGallery />
      <FeaturesSection />
      <FeaturedBooksSection />
    </main>
  )
}

export default HomePage
