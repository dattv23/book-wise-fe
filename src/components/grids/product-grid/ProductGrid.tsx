import ProductCard from '@/components/cards/product-card'

import { Product } from '@/@types/product.type'

type ProductGridProps = {
  data: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ data }) => {
  return (
    <div className='m-2 grid grid-cols-2 gap-2 sm:m-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
