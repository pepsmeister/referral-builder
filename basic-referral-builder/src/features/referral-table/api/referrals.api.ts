import { CreateReferralFormProps } from "src/features/referral-form/constants/create-referral-form.const";

export const fetchReferrals = async () => {
    try {
        const response = await fetch('http://localhost:3000/referrals')
        return response.json()
    }
    catch (error) {
        console.error(error)
    }
}

export const createReferral = async (payload: CreateReferralFormProps) => {
    try {
        const response = await fetch('http://localhost:3000/referrals', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                phone: payload.phone,
            })
        })
        return response.json()
    } catch (error) {

    }
}