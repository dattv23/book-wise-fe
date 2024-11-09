'use client'

import { z } from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { registerSchema } from '@/validations/auth.validation'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { useAuthStore } from '@/store/auth.store'
import { registerAction } from '@/server-actions'

const RegisterForm: React.FC = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  const router = useRouter()
  const { toast } = useToast()
  const { setUser } = useAuthStore()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      setIsLoading(true)

      const result = await registerAction(values)

      if (!result.success) {
        toast({
          variant: 'destructive',
          title: 'Đăng ký thất bại!',
          description: result.error
        })
        return
      }
      const { data: loginResult } = result
      if (loginResult) {
        setUser(loginResult.data.user)
      }
      toast({
        title: 'Đăng ký thành công!',
        description: 'Chào mừng bạn đến với BookWise 🫰!'
      })
      router.push('/')
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
        <Button type='submit' className='w-full' disabled={isLoading}>
          Đăng ký
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
