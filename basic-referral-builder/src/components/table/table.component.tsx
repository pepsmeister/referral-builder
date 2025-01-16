import type { ColumnDef } from '@tanstack/react-table'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { TableHeader } from './table-header.component'
import { TableBody } from './table-body.component'

interface TableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  error?: string
}

export const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='mt-8 flow-root'>
      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full align-middle max-h-[700px] overflow-auto'>
          <table className='min-w-full divide-y divide-gray-300'>
            <TableHeader table={table} />
            <TableBody table={table} />
          </table>
        </div>
      </div>
    </div>
  )
}
