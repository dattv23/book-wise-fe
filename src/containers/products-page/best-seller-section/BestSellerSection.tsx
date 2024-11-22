import { ApiResponse, Product } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'
import { envServerConfig } from '@/lib/envServer'

async function getBestSeller() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books/top-selling`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BestSellerSection: React.FC = async () => {
  const { data: products } = (await getBestSeller()) as ApiResponse<Product[]>

  return (
    <section>
      <h2 className='ml-4 text-4xl font-bold'>Sách bán chạy nhất</h2>
      <ProductGrid data={products} />
    </section>
  )
}

export default BestSellerSection
