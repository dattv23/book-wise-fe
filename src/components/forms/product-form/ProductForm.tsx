'use client'

import { Category, Product } from '@/@types'
import { FileUploader } from '@/components/shared/file-uploader'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import productSchema from '@/validations/product.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { DETAILS_FIELDS, INFO_FIELDS } from './constants'
import { useMemo, useState } from 'react'
import Image from 'next/image'

type ProductFormProps = {
  initialData: Product | null
  pageTitle: string
  categories: Category[]
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, pageTitle, categories }) => {
  const defaultValues = useMemo(
    () => ({
      info: {
        title: initialData?.info.title || '',
        author: initialData?.info.author || '',
        imageUrl: initialData?.info.imageUrl || '',
        originalPrice: initialData?.info.originalPrice || 0,
        currentPrice: initialData?.info.currentPrice || 0,
        soldQuantity: initialData?.info.soldQuantity || 0
      },
      details: {
        publisher: initialData?.details.publisher || '',
        publishingHouse: initialData?.details.publishingHouse || '',
        bookVersion: initialData?.details.bookVersion || '',
        publishDate: new Date(initialData?.details.publishDate || Date.now()),
        dimensions: initialData?.details.dimensions || '',
        translator: initialData?.details.translator || '',
        coverType: initialData?.details.coverType || '',
        pageCount: initialData?.details.pageCount || ''
      },
      description: initialData?.description || '',
      categoryId: initialData?.categoryId || ''
    }),
    [initialData]
  )

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    values: defaultValues
  })

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log(values)
  }

  const uploadFiles = async (files: File[]) => {
    setIsUploading(true)
    setTimeout(() => {
      console.log(files)
      setIsUploading(false)
    }, 3000)
  }

  const [isUploading, setIsUploading] = useState<boolean>(false)

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
              {defaultValues.info.imageUrl && (
                <Image src={defaultValues.info.imageUrl} width={300} height={300} alt={defaultValues.info.title} />
              )}
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <div className='space-y-6'>
                    <FormItem className='w-full'>
                      <FormLabel>Hình ảnh</FormLabel>
                      <FormControl>
                        <FileUploader
                          value={field.value}
                          onValueChange={field.onChange}
                          maxFiles={1}
                          maxSize={4 * 1024 * 1024}
                          onUpload={uploadFiles}
                          disabled={isUploading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {INFO_FIELDS.map((item) => (
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
                name='categoryId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Danh mục</FormLabel>
                    <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Thuộc danh mục' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem value={category.categoryId} key={category.categoryId}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả sách</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Nhập mô tả sách' rows={10} className='resize-none' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Details */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {DETAILS_FIELDS.map((item) => (
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
                name='details.publishDate'
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-1'>
                    <FormLabel className='mt-1'>Ngày xuất bản</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant={'outline'}>
                            {field.value ? new Date(field.value).toDateString() : <span>Chọn ngày xuất bản</span>}
                            <CalendarIcon />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='w-full'>
              Gởi
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ProductForm
