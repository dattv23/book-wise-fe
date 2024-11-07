import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'

type SearchBarProps = {
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div className={cn('relative mx-auto max-w-xl', className)}>
      <input type='text' placeholder='Tìm kiếm sách...' className='w-full rounded-lg border px-4 py-3' />
      <button className='absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-purple-600 p-2'>
        <SearchIcon className='text-white' size={20} />
      </button>
    </div>
  )
}

export default SearchBar
