'use client'

import { Category, Product } from '@/@types'
import React from 'react'
import { useProductTableFilters } from './useProductTableFilters'
import { DataTableSearch } from '@/components/ui/table/data-table-search'
import { DataTable } from '@/components/ui/table/data-table'
import { columns } from './colums'
import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box'
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter'

type ProductTableProps = {
  data: Product[]
  totalData: number
  categories: Category[]
}

const ProductTable: React.FC<ProductTableProps> = ({ data, categories, totalData }) => {
  const {
    searchQuery,
    categoriesFilter,
    isAnyFilterActive,
    setCategoriesFilter,
    setPage,
    setSearchQuery,
    resetFilters
  } = useProductTableFilters()
  const CATEGORY_OPTIONS = categories.map((category) => ({ label: category.name, value: category.id }))
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        <DataTableSearch searchKey='name' searchQuery={searchQuery} setSearchQuery={setSearchQuery} setPage={setPage} />
        <DataTableFilterBox
          filterKey='categories'
          title='Categories'
          options={CATEGORY_OPTIONS}
          setFilterValue={setCategoriesFilter}
          filterValue={categoriesFilter}
        />
        <DataTableResetFilter isFilterActive={isAnyFilterActive} onReset={resetFilters} />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  )
}

export default ProductTable
