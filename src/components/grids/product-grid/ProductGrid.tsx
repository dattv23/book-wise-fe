import ProductCard from '@/components/cards/product-card'

import { Book } from '@/@types/book.type'

type ProductGridProps = {
  books: Book[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ books }) => {
  return (
    <div className='my-4 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
      {books.map((book) => (
        <ProductCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default ProductGrid
