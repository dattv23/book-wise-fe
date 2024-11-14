import { Category, Product } from '@/@types'
import CategoryFilterBar from '@/components/filters/category-filter-bar'

import ProductGrid from '@/components/grids/product-grid'
import HeroSection from '@/components/shared/hero-section'

type ProductCategoryPageProps = {
  name: string
  products: Product[]
  categories: Category[]
}

const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({ name, products, categories }) => {
  return (
    <main className='flex flex-col'>
      <HeroSection subtitle='Khám phá những cuốn sách yêu thích của bạn 📚' title={name} />
      <section className='mt-12 flex flex-col items-center gap-2'>
        <CategoryFilterBar data={categories} />
      </section>
      <section className='py-12'>
        <ProductGrid data={products} />
      </section>
    </main>
  )
}

export default ProductCategoryPage
