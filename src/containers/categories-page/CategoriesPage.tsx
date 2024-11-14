import HeroSection from '@/components/shared/hero-section'
import BooksDisplayedSection from './books-displayed-section'
import FilterCategorySection from './filter-category-section'
import { Category, Product } from '@/@types'

type CategoriesPageProps = {
  categories: Category[]
  products: Product[]
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories, products }) => {
  return (
    <main className='flex flex-col'>
      <HeroSection subtitle='Khám phá những cuốn sách yêu thích của bạn 📚' title='Danh mục' />
      <FilterCategorySection data={categories} />
      <BooksDisplayedSection data={products} />
    </main>
  )
}

export default CategoriesPage
