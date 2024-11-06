import HeroSection from '@/components/shared/hero-section'
import BooksDisplayedSection from './books-displayed-section'

const CategoriesPage: React.FC = () => {
  return (
    <main>
      <HeroSection subtitle='Khám phá những cuốn sách yêu thích của bạn 📚' title='Danh mục' />
      <BooksDisplayedSection />
    </main>
  )
}

export default CategoriesPage
