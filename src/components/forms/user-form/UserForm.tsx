'use client'

import { User, Role } from '@/@types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { userSchema } from '@/validations/user.validation'
import { addUser, updateUser } from '@/server-actions/user.action'
import { PageTitle, USER_FIELDS } from './constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type UserFormProps = {
  initialData: User | null
  pageTitle: string
  userId: string
}

const UserForm: React.FC<UserFormProps> = ({ initialData, pageTitle, userId }) => {
  const defaultValues = useMemo(
    () => ({
      name: initialData?.name || '',
      email: initialData?.email || '',
      password: initialData?.password || '',
      role: (initialData?.role || 'USER') as Role
    }),
    [initialData]
  )

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    values: defaultValues
  })

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (values: z.infer<typeof userSchema>) => {
    setIsLoading(true)
    try {
      let result
      if (pageTitle === PageTitle.add) {
        result = await addUser(values)
      } else {
        result = await updateUser(values, userId)
      }
      if (!result.success) {
        toast.error(result.error || 'Đã có lỗi hệ thống!')
        return
      }
      toast.success(`${pageTitle} thành công!`)
      router.push('/admin/users')
      router.refresh()
    } catch {
      toast.error('Đã có lỗi hệ thống!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className='mx-auto w-full'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>{pageTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            {/* Information */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {USER_FIELDS.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name={item.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Input type={item.type} placeholder={item.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <FormField
                control={form.control}
                name='role'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vai trò</FormLabel>
                    <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Vai trò' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={'USER'}>USER</SelectItem>
                        <SelectItem value={'ADMIN'}>ADMIN</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='w-full' disabled={isLoading}>
              Gửi
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UserForm
