const mongoose = require('mongoose')

const servicesSchema = mongoose.Schema({
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
  address: {
    type: String,
    required: [true, 'Please Enter your address'],
  },
  type: {
    type: String,
  },
})

const servicesModel = mongoose.model('Services', servicesSchema)

module.exports = servicesModel
