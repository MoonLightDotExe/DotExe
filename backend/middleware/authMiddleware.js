const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Users = require('../models/users.model')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await Users.findById(decoded.id)
            next()
        } catch (err) {
            throw new Error(err.message)
        }
    } else {
        throw new Error('Please Include Token')
    }
})

module.exports = protect