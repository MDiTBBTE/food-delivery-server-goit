const fs = require("fs");
const path = require("path");

const fileUrl = path.join(__dirname, "../../db/all-products.json");

const productById = (request, response) => {

    const allProducts = JSON.parse(fs.readFileSync(fileUrl));
    let suitableProducts = [];

    const idProd = +request.params.id.split("=")[1];

    if (request.params.id !== undefined) {

        suitableProducts = allProducts.filter(prod => prod.id === idProd);

    }

    if (suitableProducts.length === 0) {
        suitableProducts = {
            "status": "not found",
        }
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(suitableProducts));
}

module.exports = productById;