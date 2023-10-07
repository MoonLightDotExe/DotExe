const express = require('express')
const connectDB = require('./config/db.config')
const testRoutes = require('./routes/tests.route')
const authRoutes = require('./routes/authRoutes')
const reportHandlerRoutes = require('./routes/reportHandler.route')

const PORT = process.env.PORT || 5000

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))

app.use('/api/test/', testRoutes)

app.use('/api/', reportHandlerRoutes)

app.use('/api/users/', authRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
