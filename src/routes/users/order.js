const Order = require('../../modules/db/schemas/order');

const createOrder = (req, response) => {

    const order = req.body;
    const newUser = new Order(order);

    const sendResponse = (order) => {
        console.log(order);

        response.json({
            status: 'success',
            order
        });
    };

    const sendError = () => {
        response.status(400);
        response.json({
            error: 'user was not saved'
        });
    };

    newUser.save()
        .then(sendResponse)
        .catch(sendError)

};

module.exports = createOrder;