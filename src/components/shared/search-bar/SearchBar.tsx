import SearchForm from '@/components/forms/search-form'
import { cn } from '@/lib/utils'

type SearchBarProps = {
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={cn('relative mx-auto max-w-xl px-4', className)}>
      <SearchForm />
    </div>
  )
}

export default SearchBar
