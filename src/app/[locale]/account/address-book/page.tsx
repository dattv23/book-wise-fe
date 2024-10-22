import dynamic from 'next/dynamic'

const AddressBookPage = dynamic(() => import('@/containers/account-page/address-book-page'))

const AddressBook: React.FC = () => {
  return <AddressBookPage />
}

export default AddressBook
