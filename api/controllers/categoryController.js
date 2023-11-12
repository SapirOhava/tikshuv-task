const Category = require('../models/Category');
const Product = require('../models/Product');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCategoriesWithProducts = async (req, res) => {
  try {
    // First find all categories
    const categories = await Category.find({});
    // Then for each category, find all products that have that category's ID
    const categoriesWithProducts = await Promise.all(
      categories.map(async (category) => {
        const products = await Product.find({ category: category._id });
        return {
          ...category._doc,
          products,
        };
      })
    );

    res.status(200).json(categoriesWithProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
