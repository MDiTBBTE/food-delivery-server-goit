const fs = require("fs");
const path = require("path");
const queryString = require('query-string');

const fileUrl = path.join("src/db", "all-products.json");

const productsRoute = (request, response) => {

  fs.readFile(fileUrl, "utf8", (err, data) => {
    response.writeHead(200, { "Content-Type": "application/json" });

    const urlInArray = request.parsedUrl.path.split('/');
    const allProducts = JSON.parse(data)
    let suitableProducts = [];


    if (request.parsedUrl.query !== null) {//returned cllection of products by id`s
      const queryObj = (queryString.parse(request.parsedUrl.query));

      if (queryObj.ids !== undefined) {

        const idsArrFormQueryObj = queryObj.ids.split(',');

        suitableProducts = allProducts.filter(prod => idsArrFormQueryObj.find(id => {
          return id == prod.id;
        }));

      } else if (queryObj.category !== undefined) {

        const categoryArrFromQueryObj = queryObj.category.split(',');

        suitableProducts = allProducts.filter(prod =>
          categoryArrFromQueryObj.find(elementCategory =>
            prod.categories.find(category =>
              elementCategory == category)));
      } else {

        response.end('You have error on request!');
      }
    } else if (urlInArray[2] !== undefined) {//returned one product by id

      suitableProducts = [];

      suitableProducts.push(allProducts.find(prod => prod.id == urlInArray[2]));
    } else {

      suitableProducts = allProducts;//returned all products
    }

    if (suitableProducts.length !== 0 && suitableProducts[0] !== undefined) {
      suitableProducts = {
        "status": "success",
        "products": suitableProducts
      }
    } else {
      suitableProducts = {
        "status": "no products",
        "products": []
      }
    }

    // response.write();
    response.end(JSON.stringify(suitableProducts));
  });
};

module.exports = productsRoute;
