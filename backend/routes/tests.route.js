const { addService } = require('../controllers/tests.controller')

const express = require('express')

const testRoutes = express.Router()

testRoutes.post('/services', addService)

module.exports = testRoutes
