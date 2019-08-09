const fs = require("fs");
const path = require("path");

const fileUrl = path.join("src/db", "all-products.json");

const productsRoute = (request, response) => {
  fs.readFile(fileUrl, "utf8", (err, data) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(data);
    response.end();
  });
};

module.exports = productsRoute;
