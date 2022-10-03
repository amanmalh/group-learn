import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/index.js'
dotenv.config()

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected')
})

const PORT = process.env.PORT || 3001

const app = express()
app.use('/api', routes)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})

