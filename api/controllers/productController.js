const Product = require('../models/Product');

const createOrUpdateProduct = async (req, res) => {
  const { name, category } = req.body;

  try {
    let product = await Product.findOne({ name, category });

    if (product) {
      product.count += 1;
      await product.save();
    } else {
      product = new Product({ name, category, count: 1 });
      await product.save();
    }

    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProductsWithCategory = async (req, res) => {
  try {
    const products = await Product.find({}).populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrUpdateProduct,
  getAllProducts,
  getAllProductsWithCategory,
};
