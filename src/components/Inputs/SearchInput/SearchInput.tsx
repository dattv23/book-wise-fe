import { useTranslations } from 'next-intl'

import { SearchIcon } from '@/components/Icons'

const Search = () => {
  const t = useTranslations('Search')

  return (
    <div className='flex w-72'>
      <input
        type='text'
        placeholder={t('What are you looking for?')}
        className='w-72 rounded-md border-2 border-white bg-[#F5F5F5] py-2 pl-5 pr-3'
      />
      <div className='my-auto -ml-8 h-full'>
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search
