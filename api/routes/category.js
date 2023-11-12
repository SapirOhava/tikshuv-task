const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Fetch all categories
router.get('/', categoryController.getCategories);
router.get('/products', categoryController.getCategoriesWithProducts);

module.exports = router;
