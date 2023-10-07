const {
  addService,
  updateData,
  simulation,
  getActiveReports,
} = require('../controllers/tests.controller')

const express = require('express')

const testRoutes = express.Router()

testRoutes.post('/services', addService)

testRoutes.post('/updateData', updateData)

testRoutes.post('/simulation_test', simulation)

testRoutes.get('/active_projects', getActiveReports)

module.exports = testRoutes
