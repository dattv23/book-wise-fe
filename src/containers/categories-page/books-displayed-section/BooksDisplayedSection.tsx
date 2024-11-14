import { Product } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'
import Pagination from '@/components/shared/pagination'

type BooksDisplayedSectionProps = {
  data: Product[]
  totalPages: number
}

const BooksDisplayedSection: React.FC<BooksDisplayedSectionProps> = async ({ data, totalPages }) => {
  return (
    <section className='py-12'>
      <ProductGrid data={data} />
      <Pagination totalPages={totalPages} />
    </section>
  )
}

export default BooksDisplayedSection
