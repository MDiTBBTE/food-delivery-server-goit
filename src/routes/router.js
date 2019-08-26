const defaultsRoute = require("./default");
const productsRoute = require("./products/product");
const productByIdRoute = require("./products/getProduct");
const usersRoute = require("./users/users");
const getUserRoute = require("./users/getUser")
const createUserRoute = require("./users/createUser");
const orderRoute = require("./users/order");

const express = require('express');

const apiRoutes = express.Router();

const middleware = (req, res, next) => {
  if (req.body.name) {
    next();
    return;
  }

  res.status(400);
  res.json({
    error: 'user has no "userName" field'
  })
};

apiRoutes
  .get('/', defaultsRoute)
  .get('/users', usersRoute)
  .post('/users', createUserRoute)
  .get('/products/:id', productByIdRoute)
  .get('/products', productsRoute)
  .get('/users/:id', middleware, getUserRoute)
  .post('/order', orderRoute)
  .get('*', (req, res, next) => {
    res.status(404).send('Route not exists');
  });


module.exports = apiRoutes;
