'use client'

import { Review } from '@/@types'
import React from 'react'
import { useReviewTableFilters } from './useReviewTableFilters'
import { DataTableSearch } from '@/components/ui/table/data-table-search'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from './colums'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { envClientConfig } from '@/lib/envClient'

type ReviewTableProps = {
  data: Review[]
  totalData: number
  token: string
}

const ReviewTable: React.FC<ReviewTableProps> = ({ data, totalData, token }) => {
  const { searchQuery, setPage, setSearchQuery, sentiment, isValid, setIsValid, setSentiment } = useReviewTableFilters()

  const handleExport = async () => {
    try {
      const params = new URLSearchParams()
      if (isValid) params.set('isValid', isValid)
      if (sentiment) params.set('sentiment', sentiment)
      const res = await fetch(`${envClientConfig.DOMAIN_API}/api/v2/export/reviews?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (!res.ok) {
        throw new Error('Failed to download file')
      }

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url

      const disposition = res.headers.get('Content-Disposition')
      const filenameMatch = disposition?.match(/filename="?(.+)"?/)
      const filename = filenameMatch?.[1] ?? 'reviews.csv'

      link.setAttribute('download', filename)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      toast.success('Export reviews successfully!')
    } catch (error) {
      toast('Export reviews failed!')
    }
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <div className='flex w-full items-center gap-4'>
          <DataTableSearch
            searchKey='name'
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setPage={setPage}
          />

          <Select
            value={isValid ?? 'all'}
            onValueChange={(value) => {
              setIsValid(value === 'all' ? null : value)
              setPage(1)
            }}
          >
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder='Validity' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='true'>Valid</SelectItem>
              <SelectItem value='false'>Invalid</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={sentiment ?? 'all'}
            onValueChange={(value) => {
              setSentiment(value === 'all' ? null : value)
              setPage(1)
            }}
          >
            <SelectTrigger className='w-[120px]'>
              <SelectValue placeholder='Sentiment' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='pos'>Positive</SelectItem>
              <SelectItem value='neg'>Negative</SelectItem>
              <SelectItem value='neu'>Neutral</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button onClick={handleExport}>Export CSV</Button>
        </div>
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default ReviewTable
