const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Fetch all categories
router.get('/', categoryController.getCategories);

module.exports = router;
