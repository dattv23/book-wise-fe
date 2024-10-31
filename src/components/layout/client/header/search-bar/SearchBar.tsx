import Image from 'next/image'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

const SearchBar: React.FC = () => {
  return (
    <div className='flex h-24 items-center gap-1'>
      <Image
        src='/images/cute-girl-search.png'
        alt='cute-girl-search'
        width={100}
        height={100}
        className='z-10 -mx-12'
      />
      <div className='relative flex items-center gap-1 rounded-2xl border-2 border-secondary bg-primary px-2 py-1 text-right after:absolute after:-right-2 after:block after:h-7 after:w-4 after:bg-primary'>
        <Select>
          <SelectTrigger className='w-28 border-none pl-6 font-semibold shadow-none focus:ring-0'>
            <SelectValue placeholder='Thể loại' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Thể loại</SelectLabel>
              <SelectItem value='self-help'>Self Help</SelectItem>
              <SelectItem value='tieu-thuyet'>Tiểu thuyết</SelectItem>
              <SelectItem value='trinh-tham'>Trinh thám</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder='Tìm kiếm sách, tác giả,...' className='w-64 border-none shadow-none focus-visible:ring-0' />
      </div>
      <Button className='hover:text-seconborder-secondary -ml-3 h-12 w-12 rounded-full border-2 border-secondary bg-primary hover:bg-primary'>
        <MagnifyingGlassIcon className='text-black' />
      </Button>
    </div>
  )
}

export default SearchBar
