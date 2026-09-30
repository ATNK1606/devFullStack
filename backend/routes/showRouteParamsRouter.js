const express = require('express');
const router = express();
const show = require('../controllers/showRouteParamsController')
router.get('/:id', show);

module.exports = router;
