'use client'
import { Product } from '@/@types'
import AlertDialog from '@/components/dialogs/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface CellActionProps {
  data: Product
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const onConfirm = async () => {}

  return (
    <>
      <AlertDialog isOpen={open} onClose={() => setOpen(false)} onConfirm={onConfirm} loading={loading} />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => router.push(`/admin/users/${data.bookId}`)}>
            <Edit className='mr-2 h-4 w-4' /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='mr-2 h-4 w-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
