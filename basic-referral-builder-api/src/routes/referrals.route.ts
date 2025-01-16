import { Router, Request, Response } from 'express'

const router = Router()

type Person = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
}

const people: Person[] = [
    {
        id: 2,
        firstName: 'Lindsay',
        lastName: 'Walton',
        email: 'lindsay.walton@example.com',
        phone: '099612312321',
    },
    {
        id: 2,
        firstName: 'Michael',
        lastName: 'Smith',
        email: 'michael.smith@example.com',
        phone: '091712345678',
    },
    {
        id: 2,
        firstName: 'Sophia',
        lastName: 'Johnson',
        email: 'sophia.johnson@example.com',
        phone: '092034567890',
    },
    {
        id: 3,
        firstName: 'James',
        lastName: 'Brown',
        email: 'james.brown@example.com',
        phone: '090512398765',
    },
    {
        id: 4,
        firstName: 'Emma Wilson',
        lastName: 'Wilson',
        email: 'emma.wilson@example.com',
        phone: '093176543210',
    },
    {
        id: 5,
        firstName: 'Oliver',
        lastName: 'Davis',
        email: 'oliver.davis@example.com',
        phone: '099845672134',
    },
    {
        id: 6,

        firstName: 'William',
        lastName: 'Garcia',
        email: 'william.garcia@example.com',
        phone: '093547892310',
    },
    {
        id: 7,
        firstName: 'Isabella',
        lastName: 'Hernandez',
        email: 'isabella.hernandez@example.com',
        phone: '094673829104',
    },
    {
        id: 8,
        firstName: 'Ethan',
        lastName: 'Lee',
        email: 'ethan.lee@example.com',
        phone: '092567489321',
    },
    {
        id: 9,
        firstName: 'Mia',
        lastName: 'Clark',
        email: 'mia.clark@example.com',
        phone: '091289456730',
    },
    {
        id: 10,
        firstName: 'Alexander',
        lastName: 'Lewis',
        email: 'alexander.lewis@example.com',
        phone: '092748392105',
    },
    {
        id: 11,
        firstName: 'Ameli',
        lastName: 'Walker',
        email: 'amelia.walker@example.com',
        phone: '090123467890',
    },
    {
        id: 12,
        firstName: 'Lucas',
        lastName: 'Hall',
        email: 'lucas.hall@example.com',
        phone: '093248756910',
    },
    {
        id: 13,
        firstName: 'Harper',
        lastName: 'Young',
        email: 'harper.young@example.com',
        phone: '092357481269',
    },
]

// Get all people
router.get('/referrals', async (_req: Request, res: Response) => {
    await new Promise((r) => setTimeout(r, 1000))
    res.json(people)
})

// Create a referral
router.post('/referrals', async (req: Request, res: Response) => {
    await new Promise((r) => setTimeout(r, 1000))
    const newReferral: Person = {
        id: people.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    }

    people.unshift(newReferral)
    res.status(201).json(newReferral)
})

export default router
