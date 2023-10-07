const mongoose = require('mongoose')

const reportsSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter your name'],
  },
  location: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
  nearby_services: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServicesModel',
  },
})

const reportsModel = mongoose.model('Reports', reportsSchema)

module.exports = reportsModel
