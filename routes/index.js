// Main router entry point, sets up all route modules

const express = require('express')
const router = express.Router()

const indexRouter = require('./indexRouter')
const docsRouter = require('./docsRouter')
const checkoutRouter = require('./checkoutRouter')

router.use('/', indexRouter)
router.use('/docs', docsRouter)
router.use('/checkout', checkoutRouter)

module.exports = router
