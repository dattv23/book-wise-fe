import HeroSection from '@/components/shared/hero-section'
import SidebarFilter from './sidebar-filter'
import BestSellerSection from './best-seller-section'
import ProductListSection from './product-list-section'

const ProductsPage: React.FC = () => {
  return (
    <main>
      <HeroSection title='Cửa hàng' subtitle='Tất cả những cuốn sách yêu thích của bạn ở một nơi 📚' />
      <div className='mx-4 mt-4 flex flex-wrap gap-2 py-8 md:mx-14 md:mt-8 lg:flex-nowrap'>
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
