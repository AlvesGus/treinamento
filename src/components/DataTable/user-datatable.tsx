/* eslint-disable react-refresh/only-export-components */
'use client'

import { ColumnDef } from '@tanstack/react-table'
import { User } from './interfaces-datatable'
import { DataTable } from './datetable'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      return <div>{row.getValue('id')}</div>
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div>{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      return <div>{row.getValue('email')}</div>
    }
  },
  {
    accessorKey: 'company.name',
    id: 'companyName',
    header: 'Companhia',
    cell: ({ row }) => {
      return <div>{row.getValue('companyName')}</div>
    }
  }
]
interface Props {
  users: User[]
}

export function UserDataTable({ users }: Props) {
  return (
    <DataTable
      columns={columns}
      data={users}
      pageSize={10}
      searchFields={['id', 'name', 'email', 'companyName']}
    />
  )
}
