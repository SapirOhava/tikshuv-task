const express = require('express');
const router = express.Router();
const { createOrUpdateProduct } = require('../controllers/productController');

// POST request to create or update product
router.post('/', createOrUpdateProduct);

module.exports = router;
