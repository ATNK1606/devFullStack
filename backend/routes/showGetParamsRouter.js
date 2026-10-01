const express = require('express')
const router = express()

const getParams = require('../controllers/showGetParamsController');
router.get('/', getParams)

module.exports = router;