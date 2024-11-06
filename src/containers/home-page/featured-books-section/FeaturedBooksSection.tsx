import BookGrid from '@/components/grids/book-grid'
import { books } from '@/mocks/books'

const FeaturedBooksSection: React.FC = () => {
  return (
    <section>
      <h2 className='mb-8 text-3xl font-bold'>Featured Books</h2>
      <div className='grid grid-cols-4 gap-6'>
        <BookGrid books={books.slice(0, 5)} />
      </div>
    </section>
  )
}

export default FeaturedBooksSection
