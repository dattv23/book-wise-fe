import { Product } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'

type BooksDisplayedSectionProps = {
  data: Product[]
}

const BooksDisplayedSection: React.FC<BooksDisplayedSectionProps> = async ({ data }) => {
  return (
    <section className='py-12'>
      <ProductGrid data={data} />
    </section>
  )
}

export default BooksDisplayedSection
