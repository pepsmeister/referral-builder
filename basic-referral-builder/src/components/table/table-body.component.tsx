import { flexRender, Table } from '@tanstack/react-table'

export const TableBody = <T extends object>({ table }: { table: Table<T> }) => {
  return (
    <tbody className='divide-y divide-gray-200'>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
