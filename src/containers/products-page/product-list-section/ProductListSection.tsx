import ProductFilterCombobox from '@/components/combobox/product-filter-combox'
import ProductGrid from '@/components/grids/product-grid'
import { ApiResponse, Product } from '@/@types'
import { envServerConfig } from '@/lib/envServer'

async function getBestSeller() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/recommendations/products/popular`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const ProductListSection: React.FC = async () => {
  const response = (await getBestSeller()) as ApiResponse<{ productId: string; score: number; product: Product }[]>
  const products: Product[] = response.data.map((item) => item.product)

  return (
    <section>
      <div className='flex items-center justify-between rounded-md bg-[#f4f3f8] p-2'>
        <span>Hiển thị sản phẩm 1-9 trên {products.length} kết quả</span>
        <ProductFilterCombobox />
      </div>
      <ProductGrid data={products.slice(5, products.length)} />
    </section>
  )
}

export default ProductListSection
