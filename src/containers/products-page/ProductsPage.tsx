import HeroSection from '@/components/shared/hero-section'
import SidebarFilter from './sidebar-filter'
import BestSellerSection from './best-seller-section'
import ProductListSection from './product-list-section'

const ProductsPage: React.FC = () => {
  return (
    <main>
      <HeroSection title='Cửa hàng' subtitle='Tất cả những cuốn sách yêu thích của bạn ở một nơi 📚' />
      <div className='mx-14 mt-8 flex gap-6 py-8'>
        <SidebarFilter />
        <div>
          <BestSellerSection />
          <ProductListSection />
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
