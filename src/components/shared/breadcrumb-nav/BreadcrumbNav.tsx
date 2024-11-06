'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

const translators: Record<string, string> = {
  categories: 'Danh mục',
  products: 'Cửa hàng',
  authors: 'Các tác giả'
}

const BreadcrumbNav: React.FC = () => {
  const pathName = usePathname()
  const breadcrumbItems = pathName.split('/').filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={'/'}>Trang chủ</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ArrowRightIcon />
        </BreadcrumbSeparator>
        {breadcrumbItems.map((item, index) => {
          const link = `/${breadcrumbItems.slice(0, index + 1).join('/')}`
          return (
            <BreadcrumbItem key={index}>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage className='capitalize'>{translators[item]}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={link} className='capitalize'>
                    {item}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbNav
