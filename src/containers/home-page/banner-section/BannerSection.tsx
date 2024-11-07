import SearchBar from '@/components/shared/search-bar'

const BannerSection: React.FC = () => {
  return (
    <section className='mb-12 mt-4 text-center'>
      <p className='mb-4 font-semibold capitalize md:text-xl'>Tất cả những cuốn sách yêu thích của bạn ở một nơi 📚</p>
      <h1 className='mb-8 text-2xl font-bold md:text-8xl'>
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
