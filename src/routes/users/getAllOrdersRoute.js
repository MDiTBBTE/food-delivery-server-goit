const Order = require('../../modules/db/schemas/order');

const getAllOrder = (request, response) => {

    const sendResponse = (user) => {
        response.status(200);
        response.json(user);
    };

    Order
        .find()
        .then(sendResponse)
        .catch(err => {
            console.error(err)
        });
};

module.exports = getAllOrder;
