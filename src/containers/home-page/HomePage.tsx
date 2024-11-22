import React from 'react'
import BannerSection from './banner-section'
import ImageGallery from './image-gallery'
import FeaturesSection from './features-section'
import FeaturedBooksSection from './featured-books-section'
import RecommendationsSection from './recommendations-section'

const HomePage: React.FC = () => {
  return (
    <main className='mx-auto max-w-7xl p-6'>
      <BannerSection />
      <ImageGallery />
      <FeaturesSection />
      <RecommendationsSection />
      <FeaturedBooksSection />
    </main>
  )
}

export default HomePage
