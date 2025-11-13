const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');

router.get('/', metricsController.getAll);
router.post('/', metricsController.create);
router.put('/:id', metricsController.update);

module.exports = router;
