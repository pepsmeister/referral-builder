import { flexRender, Table } from '@tanstack/react-table'

export const TableHeader = <T extends object>({
  table,
}: {
  table: Table<T>
}) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              scope='col'
              className='sticky top-0 z-10 border-b border-gray-300 bg-white/75 py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter'
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
