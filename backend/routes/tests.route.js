const { addService, updateData } = require('../controllers/tests.controller')

const express = require('express')

const testRoutes = express.Router()

testRoutes.post('/services', addService)

testRoutes.post('/updateData', updateData)

module.exports = testRoutes
