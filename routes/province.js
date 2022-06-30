const express = require('express');
const router = express.Router()
const provinceController = require('../controllers/province')

router.post('/', provinceController.create);
router.get('/', provinceController.readAll);

module.exports = router;