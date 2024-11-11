import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'

type SearchBarProps = {
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={cn('relative mx-auto max-w-xl px-4', className)}>
      <input type='text' placeholder='Tìm kiếm sách...' className='w-full rounded-lg border px-4 py-3' />
      <button
        aria-label='search-button'
        className='absolute right-6 top-1/2 -translate-y-1/2 rounded-lg bg-purple-600 p-2'
      >
        <SearchIcon className='text-white' size={20} />
      </button>
    </div>
  )
}

export default SearchBar
