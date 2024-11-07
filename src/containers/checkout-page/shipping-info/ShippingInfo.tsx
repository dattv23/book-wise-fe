import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EditIcon, MapPin } from 'lucide-react'

const address = {
  name: 'Truong Van Dat',
  address: 'đường Long Thuận, Long Phước, Thủ Đức, TP Hồ Chí Minh',
  phoneNumber: '0836129815'
}

const ShippingInfo: React.FC = () => {
  return (
    <Card className='p-4'>
      <div className='mb-4 flex items-start justify-between'>
        <div className='flex gap-2'>
          <MapPin className='h-5 w-5' />
          <h2 className='font-semibold'>Thông tin người nhận</h2>
        </div>
        <Button variant='ghost' size='sm'>
          <EditIcon />
        </Button>
      </div>
      <div className='space-y-1'>
        <p className='font-medium'>Tên: {address.name}</p>
        <p className='text-gray-600'>Địa chỉ: {address.address}</p>
        <p className='text-gray-600'>SDT: {address.phoneNumber}</p>
      </div>
    </Card>
  )
}

export default ShippingInfo
