'use client'

import { Card } from '@/components/ui/card'
import { EditIcon, MapPin } from 'lucide-react'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useAuthStore } from '@/store/auth.store'
import ShippingForm from '@/components/forms/shipping-form'
import { useShippingInfoStore } from '@/store/shipping.store'
import { useState } from 'react'

// const address = {
//   name: 'Truong Van Dat',
//   address: 'đường Long Thuận, Long Phước, Thủ Đức, TP Hồ Chí Minh',
//   phoneNumber: '0836129815'
// }

const ShippingInfo: React.FC = () => {
  const { user } = useAuthStore()
  const { address, phoneNumber } = useShippingInfoStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDialogClose = () => setIsDialogOpen(false)

  return (
    <Card className='p-4'>
      <div className='mb-4 flex items-start justify-between'>
        <div className='flex gap-2'>
          <MapPin className='h-5 w-5' />
          <h2 className='font-semibold'>Thông tin người nhận</h2>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger className='duration-150 hover:opacity-80'>
            <EditIcon />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Thay đổi thông tin nhận hàng.</DialogTitle>
            </DialogHeader>
            <ShippingForm onTriggerCloseDialog={handleDialogClose} />
          </DialogContent>
        </Dialog>
      </div>
      {user && (
        <div className='space-y-1'>
          <p className='font-medium'>Tên: {user.name}</p>
          <p className='text-gray-600'>Địa chỉ: {address || 'Chưa nhập'}</p>
          <p className='text-gray-600'>SDT: {phoneNumber || 'Chưa nhập'}</p>
        </div>
      )}
    </Card>
  )
}

export default ShippingInfo
