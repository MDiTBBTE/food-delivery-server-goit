const defaultsRoute = require("./default");
const productsRoute = require("./products/getAllProduct");
const createProduct = require("./products/createProduct");
const getProductById = require('./products/getProductById');
const updateProductRoute = require("./products/updateProduct");
const getAllUsersRoute = require("./users/getAllUsers");
const getUserRoute = require("./users/getUser")
const createUserRoute = require("./users/createUser");
const updateUserRoute = require("./users/updateUser")
const orderRoute = require("./users/order");
const getOrderRoute = require("./users/getOrder");
const getAllOrdersRoute = require('./users/getAllOrdersRoute')

const express = require('express');

const apiRoutes = express.Router();

apiRoutes
  .get('/', defaultsRoute)
  .get('/users', getAllUsersRoute)
  .post('/users', createUserRoute)
  .put('/user/:id', updateUserRoute)
  .get('/users/:id', getUserRoute)
  .post('/products', createProduct)
  .put('/product/:id', updateProductRoute)
  .get('/products/:id', getProductById)
  .get('/products', productsRoute)
  .post('/orders', orderRoute)
  .get('/orders', getAllOrdersRoute)
  .get('/orders/:id', getOrderRoute)
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });


module.exports = apiRoutes;
