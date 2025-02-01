'use client'

import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  FilterFnOption,
  getFilteredRowModel
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '../ui/button'
import { Input } from '@/components/ui/input'

function normalizeString(value: string, whiteSpaceReplace = '-') {
  if (typeof value !== 'string') {
    value = String(value) // Converte o valor para string
  }

  const alphabetSpecialChars = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const alphabetCommonChars = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'

  const normalizedValue = value
    .normalize('NFD') // Decompor caracteres combinados em base + diacríticos
    .replace(/[\u0300-\u036f]/g, '') // Remover marcas diacríticas
    .trim()
    .toLowerCase()
    .replace(/ /g, whiteSpaceReplace)
    .replace(/--/g, '-')
    .replace(/[&/\\#,+()$~%.'":*?<>{}[\]]/g, '')
    .replace(new RegExp(alphabetSpecialChars.split('').join('|'), 'g'), c =>
      alphabetCommonChars.charAt(alphabetSpecialChars.indexOf(c))
    )

  return normalizedValue
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  pageSize?: number
  searchFields?: string[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pageSize = 10,
  searchFields = []
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState<string>('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: (row, _, value) => {
        const data = row.original
        data.companyName = data?.company?.name
        const search = normalizeString(value)

        return searchFields.some(field =>
          normalizeString(data[field] || '').includes(search)
        )
      }
    },
    globalFilterFn: 'fuzzy' as FilterFnOption<TData>,
    state: {
      sorting,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize
      }
    }
  })

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter"
          value={globalFilter ?? ''}
          onChange={e => table.setGlobalFilter(String(e.target.value))}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md mr-10 border border-zinc-800">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4 mr-10">
        <Button
          variant="primaryColor"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="primaryColor"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próxima
        </Button>
      </div>
    </div>
  )
}
