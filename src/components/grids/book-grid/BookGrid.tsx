import BookCard from '@/components/cards/book-card'

import { Book } from '@/@types/book.type'

type BookGridProps = {
  books: Book[]
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className='container mx-auto px-20 py-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default BookGrid
