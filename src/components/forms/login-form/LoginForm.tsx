'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { loginSchema } from '@/validations/auth.validation'
import { loginAction } from '@/server-actions'
import { useToast } from '@/hooks/use-toast'
import { useAuthStore } from '@/store/auth.store'

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const { toast } = useToast()
  const { setUser } = useAuthStore()
  const router = useRouter()

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      setIsLoading(true)

      const result = await loginAction(values)

      if (!result.success) {
        toast({
          variant: 'destructive',
          title: 'Đăng nhập thất bại!',
          description: result.error
        })
        return
      }
      const { data: loginResult } = result
      if (loginResult) {
        setUser(loginResult.data.user)
      }
      toast({
        title: 'Đăng nhập thành công!',
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
          Đăng nhập
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
