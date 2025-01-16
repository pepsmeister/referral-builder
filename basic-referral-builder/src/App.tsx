import { ReferralForm } from './features/referral-form/referral-form.component'
import { ReferralTable } from './features/referral-table/referral-table.component'

function App() {
  return (
    <div className='mx-auto p-4 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white text-white p-4 rounded'>
          <ReferralForm />
        </div>
        <div className='bg-white text-white p-4 rounded'>
          <ReferralTable />
        </div>
      </div>
    </div>
  )
}

export default App
