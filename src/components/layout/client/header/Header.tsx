import Logo from './logo'
import SearchBar from './search-bar'
import IconGroup from './icon-group'
import Account from './account'

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between px-14 py-2'>
      <Logo />
      <SearchBar />
      <div className='flex items-center gap-4'>
        <IconGroup />
        <Account />
      </div>
    </header>
  )
}

export default Header
