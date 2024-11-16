'use client'

import { User } from '@/@types'
import React from 'react'
import { useUserTableFilters } from './useUserTableFilters'
import { DataTableSearch } from '@/components/ui/table/data-table-search'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from './colums'

type UserTableProps = {
  data: User[]
  totalData: number
}

const UserTable: React.FC<UserTableProps> = ({ data, totalData }) => {
  const { searchQuery, setPage, setSearchQuery } = useUserTableFilters()
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <DataTableSearch searchKey='name' searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage} />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default UserTable
