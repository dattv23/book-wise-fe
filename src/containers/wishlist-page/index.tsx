import WishListSection from './wishlist-section/WishListSection'
import RecommendSection from './recommend-section'

const WishlistPage: React.FC = () => {
  return (
    <main className='my-8 flex flex-col gap-4'>
      <WishListSection />
      <RecommendSection />
    </main>
  )
}

export default WishlistPage
