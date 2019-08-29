const Product = require("../../modules/db/schemas/product");

const productById = (request, response) => {

    const id = request.params.id;

    Product.findById(id)
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
module.exports = productById;
