const express = require('express');
const router = express.Router()
const territoireController = require('../controllers/territoire')

router.post('/', territoireController.create);
router.get('/', territoireController.readAll);

module.exports = router;