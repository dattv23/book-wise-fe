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
import { DETAILS_FIELDS, INFO_FIELDS, PageTitle } from './constants'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import { addProduct, updateProduct, uploadImage } from '@/server-actions/product.action'
import { useRouter } from 'next/navigation'

type ProductFormProps = {
  initialData: Product | null
  pageTitle: string
  categories: Category[]
  productId: string
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, pageTitle, categories, productId }) => {
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

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({})
  const [previewImage, setPreviewImage] = useState<string>(defaultValues.info.imageUrl)

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    setIsLoading(true)
    try {
      let result
      if (pageTitle === PageTitle.add) {
        result = await addProduct(values)
      } else {
        result = await updateProduct(values, productId)
      }
      if (!result.success) {
        toast.error(result.error || 'Đã có lỗi hệ thống!')
        return
      }
      toast.success(`${pageTitle} thành công!`)
      router.push('/admin/products')
      router.refresh()
    } catch {
      toast.error('Đã có lỗi hệ thống!')
    } finally {
      setIsLoading(false)
    }
  }

  const handleUpload = async (files: File[]) => {
    if (!files.length) return

    setIsUploading(true)
    const file = files[0]

    // Initialize progress
    setUploadProgress((prev) => ({
      ...prev,
      [file.name]: 0
    }))

    try {
      const formData = new FormData()
      formData.append('image', file)
      const response = await uploadImage(formData)

      // Update progress to 100%
      setUploadProgress((prev) => ({
        ...prev,
        [file.name]: 100
      }))

      if (!response.success || !response.data?.url) {
        throw new Error(response.error || 'Lỗi trong quá trình tải hình ảnh lên!')
      }

      // Update form value with the image URL
      form.setValue('info.imageUrl', response.data.url)
      toast.success('Hình ảnh đã được tải lên thành công!')
      setPreviewImage(response.data.url)
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Lỗi trong quá trình tải hình ảnh lên!')
      throw error
    } finally {
      setIsUploading(false)
      // Clear progress after a delay
      setTimeout(() => {
        setUploadProgress({})
      }, 1000)
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
              {previewImage && (
                <div className='flex items-center justify-center'>
                  <Image src={previewImage} width={300} height={300} alt={defaultValues.info.title} />
                </div>
              )}
              <FormField
                control={form.control}
                name='image'
                render={() => (
                  <div className='space-y-6'>
                    <FormItem className='w-full'>
                      <FormLabel>Hình ảnh</FormLabel>
                      <FormControl>
                        <FileUploader
                          value={[]}
                          onValueChange={() => {}}
                          maxFiles={1}
                          maxSize={4 * 1024 * 1024}
                          onUpload={handleUpload}
                          disabled={isUploading}
                          accept={{ 'image/*': ['.jpeg', '.jpg', '.png', '.webp'] }}
                          progresses={uploadProgress}
                          multiple={false}
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
            <Button type='submit' className='w-full' disabled={isLoading}>
              Gởi
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ProductForm
