import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Skeleton } from '../skeleton/skeleton.component'

interface TableSkeletonProps<T> {
  loading?: boolean
  columns: ColumnDef<T>[]
}

export const TableSkeleton = <T,>({
  loading,
  columns,
}: TableSkeletonProps<T>): ColumnDef<T>[] => {
  const memoizedColumns = useMemo(
    () =>
      loading
        ? columns.map((column) => ({
            ...column,
            cell: () => (
              <div className='flex gap-2 text-black items-center justify-start text-left w-auto'>
                <Skeleton />
              </div>
            ),
          }))
        : columns,
    [loading, columns]
  )

  return memoizedColumns
}
