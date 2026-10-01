const express = require('express');
const router = express.Router()
const getData = require('../controllers/showPostDataController')
router.post('/', getData)


module.exports = router