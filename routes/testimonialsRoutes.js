const express = require('express');
const router = express.Router();
const testimonialsController = require('../controllers/testimonialsController');

router.get('/public', testimonialsController.getPublic);
router.get('/admin', testimonialsController.getAdmin);
router.post('/', testimonialsController.create);
router.patch('/:id/approve', testimonialsController.approve);
router.delete('/:id', testimonialsController.delete);

module.exports = router;
