import { Category, Product } from '@/@types'
import CategoryFilterBar from '@/components/filters/category-filter-bar'

import ProductGrid from '@/components/grids/product-grid'
import HeroSection from '@/components/shared/hero-section'
import Pagination from '@/components/shared/pagination'

type ProductCategoryPageProps = {
  name: string
  products: Product[]
  categories: Category[]
  totalPages: number
}

const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({ name, products, categories, totalPages }) => {
  return (
    <main className='flex flex-col'>
      <HeroSection subtitle='Khám phá những cuốn sách yêu thích của bạn 📚' title={name} />
      <section className='mt-12 flex flex-col items-center gap-2'>
        <CategoryFilterBar data={categories} />
      </section>
      <section className='mx-2 py-12 md:mx-12'>
        <ProductGrid data={products} />
        {totalPages !== 0 && <Pagination totalPages={totalPages} />}
      </section>
    </main>
  )
}

export default ProductCategoryPage
