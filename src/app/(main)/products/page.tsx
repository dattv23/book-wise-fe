import dynamic from 'next/dynamic'

const ProductsPage = dynamic(() => import('@/containers/products-page'))

const Products: React.FC = () => {
  return <ProductsPage />
}

export default Products
