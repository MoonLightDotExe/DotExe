const asyncHandler = require('express-async-handler')
const Services = require('../models/services.model')
const Reports = require('../models/active_reports.model')
const testSets = require('../models/tests.model')
const Users = require('../models/users.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password, address } = req.body

  if (!email || !password || !name) {
    res.status(400)
    throw new Error('Please Enter all fields')
  }

  const userExists = await Users.findOne({ email })

  if (userExists) {
    res.status(401).json({ message: 'User already exists' })
  } else {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
      address,
    })
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      token: generateToken(user._id),
    })
  }
})

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const userExists = await Users.findOne({ email })

  if (
    email === 'admin@test.com' &&
    (await bcrypt.compare(password, userExists.password))
  ) {
    res.status(200).json({
      success: true,
      isAdmin: true,
    })
  } else if (
    userExists &&
    (await bcrypt.compare(password, userExists.password))
  ) {
    res.status(201).json({
      id: userExists._id,
      isAdmin: false,
      name: userExists.name,
      email: userExists.email,
      password: userExists.password,
      token: generateToken(userExists._id),
    })
  } else {
    res.status(404).json({
      message: 'Invalid Credentials',
    })
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

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

const updateData = asyncHandler(async (req, res) => {
  try {
    const { name, lat, long } = req.body
    const report = await Reports.create({ name, location: { lat, long } })
    const data = await findServices(lat, long)
    console.log('data' + data)
    res.status(201).json({
      success: true,
      name: report.name,
      location: {
        lat: report.location.lat,
        lng: report.location.long,
      },
      data: data,
    })
  } catch (err) {
    throw new Error(err)
  }
})

const findServices = async (lat, long) => {
  const services = await Services.find({})
  let nearby_services = []
  services.forEach((service) => {
    const lat2 = service.location.lat
    const long2 = service.location.long
    const calc = ((lat2 - lat) ^ 2) + ((long2 - long) ^ 2)
    const distance = Math.sqrt(calc)

    const entry = {
      distance: distance,
      id: service._id,
    }
    nearby_services.push(entry)
  })
  nearby_services.sort((a, b) => a.distance - b.distance)

  // return nearby_services
  // console.log(nearby_services)
  // Use map to create an array of promises
  let nearby_services_name = []
  const servicePromises = nearby_services.map(async (entry) => {
    const id = entry.id
    const serviceFound = await Services.findOne({ _id: id })
    const newService = {
      name: serviceFound.name,
      location: {
        lat: serviceFound.location.lat,
        long: serviceFound.location.long,
      },
      address: serviceFound.address,
      type: serviceFound.type,
    }
    console.log(newService)
    return newService
  })

  // Wait for all promises to resolve using Promise.all
  nearby_services_name = await Promise.all(servicePromises)
  console.log(nearby_services_name)
  return nearby_services_name
}

const simulation = asyncHandler(async (req, res) => {
  try {
    const volley = await testSets.find({})
    console.log(volley)
    res.status(200).json({
      success: 'Volley Sent',
    })
  } catch (err) {
    throw new Error(err)
  }
})

const getActiveReports = asyncHandler(async (req, res) => {
  try {
    const live_reports = await Reports.find({})
    console.log(live_reports)
    res.status(200).json({
      success: true,
      reports: live_reports,
    })
  } catch (err) {
    throw new Error(err)
  }
})

module.exports = {
  addService,
  registerController,
  loginController,
  simulation,
  updateData,
  simulation,
  getActiveReports,
}
