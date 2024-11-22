import { Category, Product } from '@/@types'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/shared/hero-section'))
const BooksDisplayedSection = dynamic(() => import('./books-displayed-section'))
const FilterCategorySection = dynamic(() => import('./filter-category-section'))

type CategoriesPageProps = {
  categories: Category[]
  products: Product[]
  totalPages: number
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ categories, products, totalPages }) => {
  return (
    <main className='flex flex-col'>
      <HeroSection subtitle='Khám phá những cuốn sách yêu thích của bạn 📚' title='Danh mục' />
      <FilterCategorySection data={categories} />
      <BooksDisplayedSection data={products} totalPages={totalPages} />
    </main>
  )
}

export default CategoriesPage
