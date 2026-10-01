const express = require('express')
const router = express.Router()
const allController = require('../controllers/allController') 

router.get('/list', allController.all)
router.get('/joke/:id', allController.findJoke)

module.exports = router