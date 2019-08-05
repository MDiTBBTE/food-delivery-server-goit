const fs = require("fs");

const productsRoute = (request, response) => {
  fs.readFile("src/db/all-products.json", "utf8", (err, data) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(data);
    response.end();
  });
};

module.exports = productsRoute;
