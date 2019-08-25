const defaultsRoute = require("./default");
const productsRoute = require("./products/product");
const signUpRoute = require("./signup/signup");
const usersRoute = require("./users/users");

const router = {
  "/signup": signUpRoute,
  "/products": productsRoute,
  "/users": usersRoute,
  default: defaultsRoute
};

module.exports = router;
