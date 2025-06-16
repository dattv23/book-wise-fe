'use client'

import { RadioGroup } from '@radix-ui/react-radio-group'
import { useParams, useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { StarIcon } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import { RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { addReview } from '@/server-actions/review.action'
import { reviewSchema } from '@/validations'
import { useToast } from '@/hooks/use-toast'
import { Label } from '@/components/ui/label'

const ReviewForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredRating, setHoveredRating] = useState<number>(0)

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: '',
      comment: ''
    }
  })
  const { toast } = useToast()
  const router = useRouter()
  const params = useParams()

  async function onSubmit(values: z.infer<typeof reviewSchema>) {
    try {
      setIsLoading(true)

      const result = await addReview(values, params.slug as string)

      if (!result.success) {
        toast({
          variant: 'destructive',
          title: 'Đánh giá thất bại!',
          description: result.error
        })
        return
      }
      toast({
        title: 'Gửi đánh giá thành công!',
        description: 'Cảm ơn bạn đã đóng góp ý kiến của mình 🫰!'
      })
      router.refresh()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Lỗi hệ thống',
        description: 'Đã có lỗi xảy ra. Vui lòng thử lại sau!'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='rating'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Đánh giá</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value.toString()}
                  className='flex items-center gap-2'
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div key={rating} className='relative'>
                      <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} className='peer sr-only' />
                      <Label
                        htmlFor={`rating-${rating}`}
                        className='cursor-pointer'
                        onMouseEnter={() => setHoveredRating(rating)}
                      >
                        <StarIcon
                          className={`h-6 w-6 transition-colors ${
                            hoveredRating
                              ? rating <= hoveredRating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-transparent text-gray-300'
                              : Number(field.value) >= rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-transparent text-gray-300'
                          }`}
                        />
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription>Vui lòng nhập đánh giá của bạn.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='comment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bình luận</FormLabel>
              <FormControl>
                <Textarea placeholder='Nhập bình luận của bạn ở đây' {...field} />
              </FormControl>
              <FormDescription>Vui lòng nhập bình luận của bạn.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full' disabled={isLoading}>
          Đánh giá
        </Button>
      </form>
    </Form>
  )
}

export default ReviewForm
