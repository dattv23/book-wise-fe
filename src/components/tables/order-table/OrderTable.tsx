'use client'

import { Order } from '@/@types'
import React from 'react'
import { DataTableSearch } from '@/components/ui/table/data-table-search'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from './colums'
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter'
import { useOrderTableFilters } from './useOrderTableFilters'

type OrderTableProps = {
  data: Order[]
  totalData: number
}

const OrderTable: React.FC<OrderTableProps> = ({ data, totalData }) => {
  const { searchQuery, isAnyFilterActive, setPage, setSearchQuery, resetFilters } = useOrderTableFilters()
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <DataTableSearch searchKey='name' searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage} />
        <DataTableResetFilter isFilterActive={isAnyFilterActive} onReset={resetFilters} />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default OrderTable
