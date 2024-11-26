import dynamic from 'next/dynamic'

const BannerSection = dynamic(() => import('./banner-section'))
const ImageGallery = dynamic(() => import('./image-gallery'))
const FeaturesSection = dynamic(() => import('./features-section'))
const FeaturedBooksSection = dynamic(() => import('./featured-books-section'))
const RecommendationsSection = dynamic(() => import('./recommendations-section'))

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
