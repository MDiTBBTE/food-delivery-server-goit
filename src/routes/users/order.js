const fs = require("fs");
const path = require("path");
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json

const fileUrl = path.join(__dirname, "../../db/all-products.json");
const orderUrl = path.join(__dirname, "../../db/orders.json");

const createOrder = (req, res) => {

    let productsFromOrder = req.body.products;

    fs.readFile(fileUrl, "utf8", (err, data) => {

        const ordersList = JSON.parse(fs.readFileSync(orderUrl));
        const allProducts = JSON.parse(data);
        let suitableProducts = allProducts.filter(prodId => productsFromOrder.find(orderId => +orderId === prodId.id)).map(prod => prod.name);

        if (suitableProducts.length !== 0) {
            let order = {
                "id": Date.now(),
                "user": req.body.user,
                "products": suitableProducts,
                "deliveryType": "delivery",
                "deliveryAdress": "<deliveryAdressText>"
            }

            ordersList.push(order);

            fs.writeFileSync(orderUrl, JSON.stringify(ordersList));

            const result = {
                "status": "success",
                "order": order
            }

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));

        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ 'status': 'failed', 'order': null }));
        }
    });
};

module.exports = createOrder;
