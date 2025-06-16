'use client'

import { Review } from '@/@types'
import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './CellAction'
import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<Review>[] = [
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
    accessorKey: 'userId',
    header: 'User ID'
  },
  {
    accessorKey: 'productId',
    header: 'Product ID'
  },
  {
    accessorKey: 'rating',
    header: 'Rating'
  },
  {
    accessorKey: 'comment',
    header: 'Comment'
  },
  {
    accessorKey: 'sentiment',
    header: 'Sentiment'
  },
  {
    accessorKey: 'isValid',
    header: 'Is Valid',
    cell: ({ row }) => (row.original.isValid ? 'Yes' : 'No')
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
