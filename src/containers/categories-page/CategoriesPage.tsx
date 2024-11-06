import BooksDisplayedSection from './books-displayed-section'
import CategorySection from './category-section'

const CategoriesPage: React.FC = () => {
  return (
    <main>
      <CategorySection />
      <BooksDisplayedSection />
    </main>
  )
}

export default CategoriesPage
