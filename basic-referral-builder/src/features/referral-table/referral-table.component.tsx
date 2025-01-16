import { Table } from 'src/components/table/table.component'
import {
  Person,
  REFERRAL_TABLE_COLUMNS,
} from './components/referral-table-columns.component'
import { useEffect, useState } from 'react'
import { TableSkeleton } from 'src/components/table/table-skeleton.component'

const people: Person[] = [
  {
    firstName: 'Lindsay',
    lastName: 'Walton',
    email: 'lindsay.walton@example.com',
    phone: '099612312321',
  },
  {
    firstName: 'Michael',
    lastName: 'Smith',
    email: 'michael.smith@example.com',
    phone: '091712345678',
  },
  {
    firstName: 'Sophia',
    lastName: 'Johnson',
    email: 'sophia.johnson@example.com',
    phone: '092034567890',
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    email: 'james.brown@example.com',
    phone: '090512398765',
  },
  {
    firstName: 'Emma Wilson',
    lastName: 'Wilson',
    email: 'emma.wilson@example.com',
    phone: '093176543210',
  },
  {
    firstName: 'Oliver',
    lastName: 'Davis',
    email: 'oliver.davis@example.com',
    phone: '099845672134',
  },
  {
    firstName: 'Ava',
    lastName: 'Martinez',
    email: 'ava.martinez@example.com',
    phone: '092375641289',
  },
  {
    firstName: 'William',
    lastName: 'Garcia',
    email: 'william.garcia@example.com',
    phone: '093547892310',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    email: 'isabella.hernandez@example.com',
    phone: '094673829104',
  },
  {
    firstName: 'Ethan',
    lastName: 'Lee',
    email: 'ethan.lee@example.com',
    phone: '092567489321',
  },
  {
    firstName: 'Mia',
    lastName: 'Clark',
    email: 'mia.clark@example.com',
    phone: '091289456730',
  },
  {
    firstName: 'Alexander',
    lastName: 'Lewis',
    email: 'alexander.lewis@example.com',
    phone: '092748392105',
  },
  {
    firstName: 'Ameli',
    lastName: 'Walker',
    email: 'amelia.walker@example.com',
    phone: '090123467890',
  },
  {
    firstName: 'Lucas',
    lastName: 'Hall',
    email: 'lucas.hall@example.com',
    phone: '093248756910',
  },
  {
    firstName: 'Harper',
    lastName: 'Young',
    email: 'harper.young@example.com',
    phone: '092357481269',
  },
]

export const ReferralTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const simulateLoading = async () => {
      setIsLoading(true)

      await new Promise((r) => setTimeout(r, 1000))
      setIsLoading(false)
    }
    simulateLoading()
  }, [])

  const referralTableColumns = TableSkeleton<Person>({
    loading: isLoading,
    columns: REFERRAL_TABLE_COLUMNS,
  })

  return <Table columns={referralTableColumns} data={people} />
}
