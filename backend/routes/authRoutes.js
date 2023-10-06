

const express = require('express')

const authRoutes = express.Router()

const protect = require('../middleware/authMiddleware')

const {
    registerController,
    loginController,
} = require('../controllers/tests.controller')

authRoutes.post('/register', registerController)

authRoutes.post('/login', loginController)

authRoutes.get('/hi', protect, (req, res) => {
    res.send('HELLO')
})

module.exports = authRoutes
