'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { registerSchema } from '@/validations/auth.validation'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const RegisterForm: React.FC = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Nguyen Van A' {...field} />
              </FormControl>
              <FormDescription>Vui lòng nhập họ và tên của bạn.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder='example@gmail.com' {...field} />
              </FormControl>
              <FormDescription>Vui lòng nhập email của bạn.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mật khẩu</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Example@123' {...field} />
              </FormControl>
              <FormDescription>Vui lòng nhập mật khẩu của bạn.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Đăng ký
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
