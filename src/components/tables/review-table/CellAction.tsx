'use client'
import { Review } from '@/@types'
import AlertDialog from '@/components/dialogs/alert-dialog'
import ReviewEditDialog from '@/components/dialogs/review-edit-dialog'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { deleteReview } from '@/server-actions/review.action'
import { Edit, MoreHorizontal, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

interface CellActionProps {
  data: Review
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const router = useRouter()

  const onConfirm = async () => {
    setLoading(true)
    try {
      const result = await deleteReview(data.id)
      if (!result.success) {
        toast.error(result.error || 'Đã có lỗi hệ thống!')
        return
      }
      toast.success(`Xóa review thành công!`)
      router.refresh()
    } catch {
      toast.error('Đã có lỗi hệ thống!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <AlertDialog isOpen={open} onClose={() => setOpen(false)} onConfirm={onConfirm} loading={loading} />
      {editOpen && (
        <ReviewEditDialog review={data} open={editOpen} onOpenChange={setEditOpen} onUpdated={() => router.refresh()} />
      )}

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => setEditOpen(true)}>
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
