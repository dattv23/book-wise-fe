'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useShippingInfoStore } from '@/store/shipping.store'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  address: z.string().min(5, {
    message: 'Địa chỉ phải có ít nhất 5 kí tự.'
  }),
  phoneNumber: z
    .string()
    .min(10, { message: 'Số điện thoại phải có ít nhất 10 kí tự.' })
    .regex(/^\d+$/, { message: 'Số điện thoại chỉ được chứa số.' })
})

export default function ShippingForm() {
  const { address, phoneNumber, setShippingInfo } = useShippingInfoStore()

  // Define form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address,
      phoneNumber
    }
  })

  // Handle submit form
  function handleSubmitForm(data: z.infer<typeof formSchema>) {
    setShippingInfo(data)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmitForm)} className='space-y-8'>
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ</FormLabel>
                <FormControl>
                  <Input placeholder='19C Đường 11...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input placeholder='0987654321' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Lưu
          </Button>
        </form>
      </Form>
    </>
  )
}
