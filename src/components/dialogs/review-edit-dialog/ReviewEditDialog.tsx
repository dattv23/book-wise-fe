'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'
import { updateReview } from '@/server-actions/review.action'
import { reviewSchema } from '@/validations'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Review } from '@/@types'

interface ReviewEditDialogProps {
  review: Review
  open: boolean
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void
  onUpdated?: () => void
}

export default function ReviewEditDialog({ review, open, onOpenChange, onUpdated }: ReviewEditDialogProps) {
  const [form, setForm] = useState<z.infer<typeof reviewSchema>>({
    rating: review.rating.toString(),
    comment: review.comment,
    sentiment: review.sentiment,
    isValid: review.isValid
  })

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleUpdate = async () => {
    setLoading(true)
    try {
      const result = await updateReview(form, review.id)

      if (!result.success) {
        toast.error(result.error || 'Đã có lỗi hệ thống!')
        return
      }

      router.refresh()
      toast.success('Review updated successfully!')
      onOpenChange(false)
      onUpdated?.()
    } catch (err) {
      toast.error('Failed to update review.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Review</DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label>Rating</Label>
            <Input
              type='number'
              min={1}
              max={5}
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
            />
          </div>
          <div className='space-y-2'>
            <Label>Comment</Label>
            <Textarea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
          </div>
          <div className='space-y-2'>
            <Label>Sentiment</Label>
            <Select
              value={form.sentiment}
              onValueChange={(value) => setForm({ ...form, sentiment: value as 'pos' | 'neg' | 'neu' })}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select sentiment' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='pos'>Positive</SelectItem>
                <SelectItem value='neg'>Negative</SelectItem>
                <SelectItem value='neu'>Neutral</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-2'>
            <Label>Validity</Label>
            <Select
              value={form.isValid ? 'true' : 'false'}
              onValueChange={(value) => setForm({ ...form, isValid: value === 'true' })}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='true'>Valid</SelectItem>
                <SelectItem value='false'>Invalid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='mt-4 flex justify-end gap-2'>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} disabled={loading}>
            {loading ? 'Saving...' : 'Update'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
