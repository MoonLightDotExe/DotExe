const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },

  name: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
})

const testSet = mongoose.model('testSets', testSchema)

module.exports = testSet
