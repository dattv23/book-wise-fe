import ProductGrid from '@/components/grids/product-grid'
import { envServerConfig } from '@/lib/envServer'

async function getFeaturedBooksData() {
  const res = await fetch(`${envServerConfig.DOMAIN_API}/books`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const FeaturedBooksSection: React.FC = async () => {
  const { data } = await getFeaturedBooksData()

  return (
    <section>
      <h2 className='mb-8 text-3xl font-bold'>Featured Books</h2>
      <ProductGrid data={data.slice(0, 4)} />
    </section>
  )
}

export default FeaturedBooksSection
