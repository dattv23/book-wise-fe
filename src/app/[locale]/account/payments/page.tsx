import dynamic from 'next/dynamic'

const PaymentOptionsPage = dynamic(() => import('@/containers/account-page/payment-options-page'))

const PaymentOptions: React.FC = () => {
  return <PaymentOptionsPage />
}

export default PaymentOptions
