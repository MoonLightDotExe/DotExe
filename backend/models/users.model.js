const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter your name'],
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  address: {
    type: String,
    required: [true, 'Please Enter your address'],
  },
  trust: {
    type: Number,
    default: 0.5,
  },
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel
