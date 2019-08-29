const User = require('../../modules/db/schemas/user');
const bcrypt = require('bcrypt');

const createUser = (req, response) => {

    // Example for creating
    // const user = {
    // "favoriteProducts": [],
    // "viewedProducts": [],
    // "orders": [],
    // "_id": "5d67cdf87e979137dcd7497f",
    // "username": "Andrii",
    // "email": "example.me@gmail.com",
    // "telephone": "050 484 75 79",
    // "password": "$2b$10$sEXnv13Kvr3xXIhEAEmcwuZT2QCQqUZdzO2ssh1ImPwOkh0Qjm6Cm",
    // }
    
    const user = req.body;

    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const userData = { ...user, password: hashedPassword };

    const newUser = new User(userData);

    const sendResponse = (user) => {
        console.log(user);

        response.json({
            status: 'success',
            user
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

module.exports = createUser;