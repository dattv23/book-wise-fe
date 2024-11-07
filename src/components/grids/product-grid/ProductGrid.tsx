import ProductCard from '@/components/cards/product-card'

import { Book } from '@/@types/book.type'

type ProductGridProps = {
  books: Book[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ books }) => {
  return (
    <div className='m-2 grid grid-cols-2 gap-2 sm:m-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4'>
      {books.map((book) => (
        <ProductCard key={book.id} book={book} />
      ))}
    </div>
  )
}

export default ProductGrid
