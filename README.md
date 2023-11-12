# Node.js API Setup Guide

## Prerequisites

Before running this API, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Git (optional, if you wish to clone the repository)

## Installation

Follow these steps to get your development environment running:

1. Clone the repository (if using Git):
   \`\`\`bash
   git clone [repository-link]
   cd [repository-directory]
   \`\`\`

2. Install the required npm packages:
   \`\`\`bash
   npm install
   \`\`\`

## Database Setup

You need to set up a MongoDB database to work with this API. You can create a free MongoDB Atlas database by following these steps:

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database) and sign up or log in.
2. Create a new project and build a new cluster.
3. Once your cluster is ready, navigate to the 'Database Access' section and add a new database user with read and write privileges.
4. In the 'Network Access' section, add your IP address to the IP whitelist.
5. Go to 'Clusters', click on 'CONNECT', and choose 'Connect your application'. Copy the connection string.

## Environment Variables

Before running the server, you need to set up your environment variables:

1. Create a '.env' file in the root directory of your project.
2. Add your MongoDB URI to the '.env' file like this:
   \`\`\`
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-address>/myFirstDatabase?retryWrites=true&w=majority
   \`\`\`
   Replace \`<username>\`, \`<password>\`, and \`<cluster-address>\` with your MongoDB Atlas database user's username, password, and the cluster address you got in the previous step.

Alternatively, you can contact the API provider to request their '.env' file with the necessary configurations.

## Running the API

Once the setup is complete, you can start the server by running:

\`\`\`bash
npm start
\`\`\`

The server will start, and you should see the logs indicating that the server is running on the specified port and that the MongoDB database connection is established successfully.

## Endpoints

The API has the following endpoints:

- GET /api/categories
- POST /api/categories
- GET /api/products
- POST /api/products

You can use tools like Postman or cURL to test the API endpoints.

## Support

For support, please reach out to the API provider or the repository owner.

Thank you for using our Node.js API!
