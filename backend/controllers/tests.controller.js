const asyncHandler = require('express-async-handler')
const Services = require('../models/services.model')
const Reports = require('../models/active_reports.model')
const Users = require('../models/users.model')

const addService = asyncHandler(async (req, res) => {
  try {
    const { name, addr, lat, long, type } = req.body
    const service = await Services.create({
      name,
      address: addr,
      location: {
        lat,
        long,
      },
      type,
    })

    res.status(201).json({
      success: true,
      name: service.name,
      addr: service.addr,
      location: {
        lat: service.location.lat,
        long: service.location.long,
      },
      type: service.type,
    })
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = { addService }
