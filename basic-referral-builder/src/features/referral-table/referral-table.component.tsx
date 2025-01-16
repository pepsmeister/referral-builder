import { Table } from 'src/components/table/table.component'
import {
  Person,
  REFERRAL_TABLE_COLUMNS,
} from './components/referral-table-columns.component'
import { TableSkeleton } from 'src/components/table/table-skeleton.component'
import { useQuery } from '@tanstack/react-query'
import { fetchReferrals } from './api/referrals.api'

export const ReferralTable = () => {
  const {
    isLoading,
    error,
    data: dataPeople = Array(3).fill({}),
  } = useQuery<Person[]>({
    queryKey: ['referrals'],
    queryFn: fetchReferrals,
  })

  const referralTableColumns = TableSkeleton<Person>({
    loading: isLoading,
    columns: REFERRAL_TABLE_COLUMNS,
  })

  return <Table columns={referralTableColumns} data={dataPeople} />
}
