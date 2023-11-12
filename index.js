const express = require('express');
const mongoose = require('./db'); // This will establish the database connection when loaded
const port = process.env.PORT || 5000;
const categoryRoutes = require('./api/routes/category');

const app = express();

// Express middleware
app.use(express.json());

// Defined routes
app.use('/api/categories', categoryRoutes);

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
