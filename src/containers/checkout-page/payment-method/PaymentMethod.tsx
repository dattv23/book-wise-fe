import { Card } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { HandCoinsIcon, WalletIcon } from 'lucide-react'

const PaymentMethod: React.FC = () => {
  return (
    <Card className='p-4'>
      <h2 className='mb-4 font-semibold'>Phương thức thanh toán</h2>
      <RadioGroup defaultValue='card' className='space-y-3'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='cash' id='cash' />
          <label htmlFor='cash' className='flex items-center gap-2'>
            <HandCoinsIcon className='h-5 w-5' />
            <span>Tiền mặt</span>
          </label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='wallet' id='wallet' />
          <label htmlFor='wallet' className='flex items-center gap-2'>
            <WalletIcon className='h-5 w-5' />
            <span>Ví điện tử</span>
          </label>
        </div>
      </RadioGroup>
    </Card>
  )
}

export default PaymentMethod
