import SearchBar from '@components/shared/search-bar'
import BreadcrumbNav from '../breadcrumb-nav'

type HeroSectionProps = {
  title: string
  subtitle: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className='relative flex h-72 flex-col items-center justify-between bg-[#f4f3f8] p-12'>
      <p className='font-semibold capitalize'>{subtitle}</p>
      <h1 className='text-8xl font-bold capitalize'>{title}</h1>
      <BreadcrumbNav />
      <SearchBar className='absolute -bottom-5 w-96' />
    </section>
  )
}

export default HeroSection
