'use client'

import React from 'react'
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

  if (breadcrumbItems.length === 0) return

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
            <React.Fragment key={index}>
              <BreadcrumbItem key={index}>
                {index === breadcrumbItems.length - 1 ? (
                  <BreadcrumbPage>{translators[item] ?? item}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={link}>{translators[item] ?? item}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index !== breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator key={`arrow-${index}`}>
                  <ArrowRightIcon />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbNav
