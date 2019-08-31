const Product = require('../../modules/db/schemas/product');

const createProd = (req, response) => {

    const prod = req.body;

    const newProd = new Product(prod);

    const sendResponse = (prod) => {
        console.log(prod);

        response.json({
            status: 'success',
            prod
        });
    };

    const sendError = () => {
        response.status(400);
        response.json({
            error: 'prod was not saved'
        });
    };

    newProd.save()
        .then(sendResponse)
        .catch(sendError)

};

module.exports = createProd;