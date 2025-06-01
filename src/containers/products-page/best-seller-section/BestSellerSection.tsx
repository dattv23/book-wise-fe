import { ApiResponse, Product } from '@/@types'
import ProductGrid from '@/components/grids/product-grid'
import { envServerConfig } from '@/lib/envServer'

async function getBestSeller() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/recommendations/products/popular`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BestSellerSection: React.FC = async () => {
  const response = (await getBestSeller()) as ApiResponse<{ productId: string; score: number; product: Product }[]>
  const products: Product[] = response.data.map((item) => item.product)

  return (
    <section>
      <h2 className='ml-4 text-4xl font-bold'>Sách bán chạy nhất</h2>
      <ProductGrid data={products} />
    </section>
  )
}

export default BestSellerSection
