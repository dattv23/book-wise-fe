import ProductFilterCombobox from '@/components/combobox/product-filter-combox'
import ProductGrid from '@/components/grids/product-grid'
import { books } from '@/mocks/books'

const ProductListSection: React.FC = () => {
  return (
    <section>
      <div className='flex items-center justify-between rounded-md bg-[#f4f3f8] p-2'>
        <span>Hiển thị sản phẩm 1-9 trên {books.length} kết quả</span>
        <ProductFilterCombobox />
      </div>
      <ProductGrid data={books.slice(5, books.length)} />
    </section>
  )
}

export default ProductListSection
