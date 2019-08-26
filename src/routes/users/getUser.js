const fs = require("fs");
const path = require("path");

const fileUrl = path.join(__dirname, "../../db/users.json");

const userById = (request, response) => {

    const allUsers = JSON.parse(fs.readFileSync(fileUrl));
    let suitableUser = [];

    const idUser = +request.params.id.split("=")[1];

    if (request.params.id !== undefined) {

        suitableUser = allUsers.filter(user => user.user.id === idUser);
    }

    if (suitableUser.length === 0) {
        suitableUser = {
            'status': 'not found'
        }
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(suitableUser));

}
module.exports = userById;