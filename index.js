const express = require('express');
const mongoose = require('./db'); // This will establish the database connection when loaded
const cors = require('cors');
const port = process.env.PORT || 5000;
const categoryRoutes = require('./api/routes/category');
const productRoutes = require('./api/routes/product');

const app = express();

// Enable CORS for all requests
app.use(cors());

// Express middleware
app.use(express.json());

// Defined routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle database connection events
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// This attaches a one-time listener for the 'open' event. The 'open' event is emitted when Mongoose successfully makes its initial connection to the MongoDB server. This listener is set to only fire once; it will be removed after it runs for the first time.
mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
