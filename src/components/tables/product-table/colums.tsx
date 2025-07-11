'use client'

import { Product } from '@/@types'
import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './CellAction'
import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: 'Product ID'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'stockQuantity',
    header: 'Stock Quantity'
  },
  {
    accessorKey: 'dicount',
    header: 'Discount',
    cell: ({ row }) => `${row.original.discount}%`
  },
  {
    accessorKey: 'currentPrice',
    header: 'Current Price',
    cell: ({ row }) =>
      `${((row.original.originalPrice * (100 - row.original.discount)) / 100).toLocaleString('vi-VN')} đ`
  },
  {
    accessorKey: 'originalPrice',
    header: 'Original Price',
    cell: ({ row }) => `${row.original.originalPrice.toLocaleString('vi-VN')} đ`
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
