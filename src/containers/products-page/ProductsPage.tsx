import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/shared/hero-section'))
const SidebarFilter = dynamic(() => import('./sidebar-filter'))
const BestSellerSection = dynamic(() => import('./best-seller-section'))
const ProductListSection = dynamic(() => import('./product-list-section'))

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
