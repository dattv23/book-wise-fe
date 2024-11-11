import CategoryFilterBar from '@/components/filters/category-filter-bar'
import ProductGrid from '@/components/grids/product-grid'
import { envServerConfig } from '@/lib/envServer'
import { ApiResponse, Book } from '@/@types'

async function getBooks() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BooksDisplayedSection: React.FC = async () => {
  const { data } = (await getBooks()) as ApiResponse<Book[]>

  return (
    <section className='flex flex-col items-center gap-2 py-12'>
      <CategoryFilterBar />
      <ProductGrid books={data} />
    </section>
  )
}

export default BooksDisplayedSection
