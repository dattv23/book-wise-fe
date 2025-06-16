'use client'

import { Review } from '@/@types'
import React from 'react'
import { useReviewTableFilters } from './useReviewTableFilters'
import { DataTableSearch } from '@/components/ui/table/data-table-search'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from './colums'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type ReviewTableProps = {
  data: Review[]
  totalData: number
}

const ReviewTable: React.FC<ReviewTableProps> = ({ data, totalData }) => {
  const { searchQuery, setPage, setSearchQuery, sentiment, isValid, setIsValid, setSentiment } = useReviewTableFilters()
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <DataTableSearch searchKey='name' searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage} />

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
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default ReviewTable
