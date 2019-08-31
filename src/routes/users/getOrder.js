const Order = require("../../modules/db/schemas/order");

const orderById = (request, response) => {

    const id = request.params.id;

    Order.findById(id)
        .exec()
        .then(doc => {
            response.status(200).json(doc);
            console.log(doc)
        })
        .catch(err => {
            response.status(500).json({ eror: err });
            console.log(err);
        })

}
module.exports = orderById;
