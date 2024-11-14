import SearchBar from '@components/shared/search-bar'
import BreadcrumbNav from '../breadcrumb-nav'

type HeroSectionProps = {
  title: string
  subtitle: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className='relative flex h-fit flex-col items-center justify-between gap-4 bg-[#f4f3f8] p-12'>
      <p className='text-center font-semibold capitalize'>{subtitle}</p>
      <h1 className='text-center text-6xl font-bold capitalize md:text-8xl'>{title}</h1>
      <BreadcrumbNav />
      <SearchBar className='absolute -bottom-5 w-96' />
    </section>
  )
}

export default HeroSection
