const express = require('express')
const { addService } = require('../controllers/tests.controller')

const testRoutes = express.Router()

testRoutes.post('/services', addService)

module.exports = testRoutes
