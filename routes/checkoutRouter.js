// All main checkout routes

const express = require('express');
const router = express.Router();

const { getCheckoutData } = require('../controllers/checkoutController');

router.get('/', getCheckoutData);

module.exports = router;
