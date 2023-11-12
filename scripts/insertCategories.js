// It's a standalone script you execute once to seed your database.
// i just used it once to seed my mongoDb Atlas
// there isn't a need for you to run it
// unless you want to seed your own db then
// 1.Open a terminal or command prompt.
// 2.Navigate to your project directory where insertCategories.js is located.
// 3.Run the script using Node.js by executing node insertCategories.js.
// This script will insert the categories into your MongoDB database and then disconnect.

require('dotenv').config({ path: '../.env' });
const mongoose = require('../db');
const Category = require('../api/models/Category');

const insertCategories = async () => {
  const categories = [
    { name: 'Vegetables and fruits' },
    { name: 'Cleaning products' },
    { name: 'Pastries' },
    { name: 'Meat and fish' },
  ];

  try {
    await Category.insertMany(categories);
    console.log('Categories inserted');
  } catch (error) {
    console.error('Error inserting categories:', error);
  }
};

insertCategories().then(() => mongoose.disconnect());
