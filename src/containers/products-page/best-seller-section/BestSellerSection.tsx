import ProductGrid from '@/components/grids/product-grid'
import { books } from '@/mocks/books'

const BestSellerSection: React.FC = () => {
  return (
    <section>
      <h2 className='text-4xl font-bold'>Sách bán chạy nhất</h2>
      <ProductGrid books={books.slice(0, 4)} />
    </section>
  )
}

export default BestSellerSection
