import * as yup from 'yup'

export const createReferralFormSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone is required'),
    homeName: yup.string().optional(),
    street: yup.string().optional(),
    suburb: yup.string().optional(),
    state: yup.string().optional(),
    postCode: yup.string().optional(),
    country: yup.string().optional(),
})

export type CreateReferraFormProps = yup.InferType<typeof createReferralFormSchema>
