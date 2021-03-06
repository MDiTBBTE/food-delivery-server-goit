const User = require("../../modules/db/schemas/user");


const userById = (request, response) => {

    const id = request.params.id;

    User.findById(id)
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
module.exports = userById;
