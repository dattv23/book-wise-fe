'use client'

import { Order } from '@/@types'
import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './CellAction'
import { Checkbox } from '@/components/ui/checkbox'

export const columns: ColumnDef<Order>[] = [
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
    accessorKey: 'orderId',
    header: 'Order ID'
  },
  {
    accessorKey: 'userId',
    header: 'User ID'
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row }) => `${row.original.total.toLocaleString('vi-VN')} đ`
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Payment Method'
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment Status'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
