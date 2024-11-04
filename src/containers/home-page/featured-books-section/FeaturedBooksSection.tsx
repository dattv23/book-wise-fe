import BookCard from '@/components/cards/book-card'
import React from 'react'

const FeaturedBooksSection = () => {
  return (
    <section>
      <h2 className='mb-8 text-3xl font-bold'>Featured Books</h2>
      <div className='grid grid-cols-4 gap-6'>
        <BookCard title='Of White and Shady' author='Robert WordSpot' image='/images/book.jpg' price={180000} />
        <BookCard title='Dune Messiah' author='Frank Herbert' image='/images/book.jpg' price={120000} />
        <BookCard title='Joker' author='Mark Phillips' image='/images/book.jpg' price={90000} />
        <BookCard title='Peter and The Wolf' author='Sarah Winter' image='/images/book.jpg' price={56000} />
      </div>
    </section>
  )
}

export default FeaturedBooksSection
