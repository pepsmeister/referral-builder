import { ColumnDef, Row } from '@tanstack/react-table'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'

export type Person = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

export const REFERRAL_TABLE_COLUMNS: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
    header: 'Given Name',
  },
  {
    accessorKey: 'lastName',
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
    header: 'Surname',
  },
  {
    accessorKey: 'email',
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
    header: 'Phone',
  },
  {
    id: 'actions',
    cell: ({ row }: { row: Row<Person> }) => (
      <div className='flex gap-4'>
        <button
          onClick={() => {
            alert(`Edit ${row.original.firstName} ${row.original.lastName}`)
          }}
          type='button'
          className='rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          <PencilSquareIcon className='h-5 w-5' />
        </button>
        <button
          onClick={() => {
            alert(`Delete ${row.original.firstName} ${row.original.lastName}`)
          }}
          type='button'
          className='rounded-full bg-red-600 p-1 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
        >
          <TrashIcon className='h-5 w-5' />
        </button>
      </div>
    ),
    header: '',
  },
]
