import BreadcrumbNav from '@/components/shared/breadcrumb-nav'
import SearchBar from '@/components/shared/search-bar'

const CategorySection: React.FC = () => {
  return (
    <section className='relative flex h-72 flex-col items-center justify-between bg-[#f4f3f8] p-12'>
      <p className='font-semibold'>Khám phá những cuốn sách yêu thích của bạn 📚</p>
      <h1 className='text-8xl font-bold capitalize'>Danh mục</h1>
      <BreadcrumbNav />
      <SearchBar className='absolute -bottom-5 w-96' />
    </section>
  )
}

export default CategorySection
