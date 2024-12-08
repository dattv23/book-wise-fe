'use client'

import { Order } from '@/@types'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Edit, MoreHorizontal } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface CellActionProps {
  data: Order
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const router = useRouter()

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => router.push(`/admin/orders/${data.orderId}`)}>
            <Edit className='mr-2 h-4 w-4' /> Update
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
