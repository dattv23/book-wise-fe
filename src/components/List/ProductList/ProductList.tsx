'use client'

import { Pagination } from 'antd'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import { Product } from '@/types'
import { ProductCard } from '@/components/Card'

type ProductListProps = {
  data: Product[]
}

const ProductList = (props: ProductListProps) => {
  const { data } = props
  const router = useRouter()
  const searchParams = useSearchParams()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)

  useEffect(() => {
    const pageParam = searchParams.get('page') ?? '1'
    const pageSizeParam = searchParams.get('pageSize') ?? '8'
    setPage(!isNaN(Number(pageParam)) ? Number(pageParam) : 1)
    setPageSize(!isNaN(Number(pageSizeParam)) ? Number(pageSizeParam) : 8)
  }, [searchParams])

  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize

  const handlePageChange = (newPage: number, newPageSize: number) => {
    setPage(newPage)
    setPageSize(newPageSize)
    router.push(`?page=${newPage}&pageSize=${newPageSize}`)
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-4'>
        {data.slice(startIndex, endIndex).map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
      <Pagination
        current={page}
        total={data.length}
        pageSize={pageSize}
        onChange={handlePageChange}
        onShowSizeChange={handlePageChange}
        showSizeChanger
        pageSizeOptions={['8', '16', '24', '32']}
      />
    </div>
  )
}

export default ProductList
