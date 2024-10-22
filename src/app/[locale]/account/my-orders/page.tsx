import dynamic from 'next/dynamic'

const MyOrderPage = dynamic(() => import('@/containers/account-page/my-orders-page'))

const MyOrder: React.FC = () => {
  return <MyOrderPage />
}

export default MyOrder
