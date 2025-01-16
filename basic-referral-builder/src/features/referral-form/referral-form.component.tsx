import { FormProvider, useForm } from 'react-hook-form'
import { Divider } from 'src/components/divider/divider.component'
import {
  CreateReferraFormProps,
  createReferralFormSchema,
} from './constants/create-referral-form.const'
import { yupResolver } from '@hookform/resolvers/yup'
import { InputControlled } from 'src/components/input-controlled/input-controlled.component'

export const ReferralForm = () => {
  const formMethods = useForm({
    resolver: yupResolver(createReferralFormSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  })

  const { handleSubmit } = formMethods

  const onSubmit = (data: CreateReferraFormProps) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-12'>
          <div className='pb-12'>
            <h2 className='text-3xl font-semibold text-gray-900'>
              Referral Builder
            </h2>
            <p className='mt-1 text-sm/6 text-gray-600 font-bold'>
              Personal Details
            </p>

            <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
              <div className='sm:col-span-3'>
                <InputControlled
                  name='firstName'
                  label='First Name'
                  type='text'
                  required
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='lastName'
                  label='Last Name'
                  type='text'
                  required
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='email'
                  label='Email Address'
                  type='text'
                  required
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='phone'
                  label='Phone'
                  type='text'
                  required
                />
              </div>

              <div className='col-span-full'>
                <label className='block text-sm/6 font-bold text-gray-900 mb-2'>
                  Address
                </label>
                <Divider />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='homeName'
                  label='Home Name'
                  type='text'
                  required={false}
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='street'
                  label='Street'
                  type='text'
                  required={false}
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='suburb'
                  label='Suburb'
                  type='text'
                  required={false}
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='state'
                  label='State'
                  type='text'
                  required={false}
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='postCode'
                  label='Postcode'
                  type='text'
                  required={false}
                />
              </div>

              <div className='sm:col-span-3'>
                <InputControlled
                  name='country'
                  label='Country'
                  type='text'
                  required={false}
                />
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button
            type='button'
            className='text-sm/6 font-semibold text-gray-900'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
