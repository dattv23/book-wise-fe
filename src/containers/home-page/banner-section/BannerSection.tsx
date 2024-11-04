import SearchBar from '@/components/shared/search-bar'

const BannerSection: React.FC = () => {
  return (
    <section className='mb-12 mt-4 text-center'>
      <p className='mb-4 text-xl font-semibold'>All Your Favorite Books In One Place 📚</p>
      <h1 className='mb-8 text-8xl font-bold'>
        Largest Digital Library Of
        <br />
        Bestselling eBooks
      </h1>

      {/* Search Bar */}
      <SearchBar />
    </section>
  )
}

export default BannerSection
