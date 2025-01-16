import express from 'express'
import referralsRoutes from './routes/referrals.route'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/', referralsRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
