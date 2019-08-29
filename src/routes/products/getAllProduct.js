const Product = require('../../modules/db/schemas/product');

const getAllProducts = (request, response) => {

  const sendResponse = (user) => {
    response.status(200);
    response.json(user);
  };

  Product
    .find()
    .then(sendResponse)
    .catch(err => {
      console.error(err)
    });
};

module.exports = getAllProducts;