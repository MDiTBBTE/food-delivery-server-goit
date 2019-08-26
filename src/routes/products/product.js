const fs = require("fs");
const path = require("path");

const fileUrl = path.join(__dirname, "../../db/all-products.json");

const productsRoute = (request, response) => {

  const allProducts = JSON.parse(fs.readFileSync(fileUrl));
  let suitableProducts = [];


  if (request.query.ids !== undefined) {
    
    const idsQueryArr = request.query.ids.split(",");

    suitableProducts = allProducts.filter(prod => idsQueryArr.find(ids => +ids === prod.id))
  } else if (request.query.categories !== undefined) {

    const categoriesQueryArr = request.query.categories.split(",");

    suitableProducts = allProducts.filter(prod =>
      categoriesQueryArr.find(categoryQuery =>
        prod.categories.find(categoryProd =>
          categoryProd === categoryQuery)));
  } else (suitableProducts = allProducts)

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

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(suitableProducts));
};
module.exports = productsRoute;
