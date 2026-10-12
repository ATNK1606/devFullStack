const express = require('express');
const router = express.Router();
const list = require('../controllers/moviesController')

router.get('/movies', list)

module.exports = router