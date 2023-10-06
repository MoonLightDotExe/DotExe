const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database connected on ${conn.connection.host}`)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = connectDB
