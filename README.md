# Backend for Shopping List App

## Overview

This is the backend server for a shopping list application, built with Node.js and Express, and uses MongoDB Atlas for data storage.

## Features

- REST API for managing shopping list items
- Integration with MongoDB Atlas for data persistence
- create, read and update operations for category and products for shopping list

## Technologies

- Node.js
- Express
- MongoDB Atlas

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```sh
npm install npm@latest -g
```

### Installation

1. Clone the backend repository
   ```sh
   git clone [your-backend-repo-link]
   ```

"2. Install dependencies

```sh
npm install
```

## Database Setup

To integrate with the MongoDB database, follow these steps:

1. **MongoDB Atlas Setup**:

   - Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new project and build a new cluster.
   - In the 'Database Access' section, create a new database user with read and write privileges.
   - Add your IP address to the whitelist in the 'Network Access' section.
   - In 'Clusters', click 'CONNECT', select 'Connect your application', and copy the connection string.

2. **Environment Variables**:
   - In your project's root directory, create a `.env` file.
   - Set up your MongoDB URI in the `.env` file:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster-address>/myFirstDatabase?retryWrites=true&w=majority
     ```
     Replace `<username>`, `<password>`, and `<cluster-address>` with your MongoDB user details and cluster address.

### Running the server

To start the server, run:

```sh
npm run start
```

The server will start on http://localhost:5000/api ( see the routes for categories and products in the routes directory)
