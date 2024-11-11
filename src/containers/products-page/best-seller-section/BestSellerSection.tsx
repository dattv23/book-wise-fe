import { ApiResponse, Book } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'
import { envServerConfig } from '@/lib/envServer'

async function getBestSeller() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BestSellerSection: React.FC = async () => {
  const { data } = (await getBestSeller()) as ApiResponse<Book[]>

  return (
    <section>
      <h2 className='text-4xl font-bold'>Sách bán chạy nhất</h2>
      <ProductGrid books={data.slice(0, 4)} />
    </section>
  )
}

export default BestSellerSection
