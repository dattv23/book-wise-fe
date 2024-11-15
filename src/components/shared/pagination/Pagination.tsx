'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Pagination as PaginationShadcn, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

type PaginationProps = {
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const pageNumbers =
    totalPages < 6 || currentPage <= 3
      ? Array.from({ length: Math.min(totalPages, 5) }, (_, index) => index + 1)
      : Array.from({ length: 5 }, (_, index) => index + currentPage - 2)

  const handleChange = (pageNumber: number) => {
    const url = createPageURL(pageNumber)
    router.push(url)
  }

  return (
    <PaginationShadcn>
      <PaginationContent>
        <PaginationItem>
          <Button variant={'outline'} disabled={currentPage === 1} onClick={() => handleChange(currentPage - 1)}>
            Trước
          </Button>
        </PaginationItem>
        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <Button
              disabled={currentPage === pageNumber}
              variant={pageNumber === currentPage ? 'default' : 'outline'}
              onClick={() => handleChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            variant={'outline'}
            disabled={currentPage === totalPages}
            onClick={() => handleChange(currentPage + 1)}
          >
            Tiếp
          </Button>
        </PaginationItem>
      </PaginationContent>
    </PaginationShadcn>
  )
}

export default Pagination
