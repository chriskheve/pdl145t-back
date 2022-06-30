const express = require('express');
const router = express.Router()
const entiteController = require('../controllers/entite')

router.post('/', entiteController.create);


router.get('/', entiteController.readAll);
router.get('/count', entiteController.readByEnt);
router.get('/:entiteId', entiteController.read);

module.exports = router;