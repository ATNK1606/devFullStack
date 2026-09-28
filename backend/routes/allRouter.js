const express = require('express')
const router = express.Router()
const allController = require('../controllers/allController') 

router.get('/list', allController.all)

module.exports = router