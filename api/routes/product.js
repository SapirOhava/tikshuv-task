const express = require('express');
const router = express.Router();
const {
  createOrUpdateProduct,
  getAllProducts,
  getAllProductsWithCategory,
} = require('../controllers/productController');

router.post('/', createOrUpdateProduct);
router.get('/', getAllProducts);
router.get('/categories', getAllProductsWithCategory);

module.exports = router;
