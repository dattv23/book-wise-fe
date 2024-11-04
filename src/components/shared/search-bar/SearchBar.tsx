import { SearchIcon } from 'lucide-react'

const SearchBar: React.FC = () => {
  return (
    <div className='relative mx-auto max-w-xl'>
      <input type='text' placeholder='Search your favorite books...' className='w-full rounded-lg border px-4 py-3' />
      <button className='absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-purple-600 p-2'>
        <SearchIcon className='text-white' size={20} />
      </button>
    </div>
  )
}

export default SearchBar
