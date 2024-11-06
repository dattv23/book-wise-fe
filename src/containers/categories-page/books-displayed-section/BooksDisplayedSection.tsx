import { books } from '@/mocks/books'

import ProductGrid from '@/components/grids/product-grid'
import CategoryFilterBar from '@/components/filters/category-filter-bar'

const BooksDisplayedSection: React.FC = () => {
  return (
    <section className='flex flex-col items-center gap-2 py-12'>
      <CategoryFilterBar />
      <ProductGrid books={books} />
    </section>
  )
}

export default BooksDisplayedSection
