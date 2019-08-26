const fs = require("fs");
const path = require("path");
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const fileUrl = path.join(__dirname, "../../db/users.json");

const createUser = (req, res) => {

    fs.readFile(fileUrl, "utf8", (err, data) => {

        let user = {
            "id": Date.now(),
            "username": req.body.name,
            "telephone": "063 467 71 31",
            "password": "12345",
            "email": "ivan@gmail.com"
        }

        let allUsers = JSON.parse(data);
        allUsers.push(user);

        fs.writeFileSync(fileUrl, JSON.stringify(allUsers), 'utf8');

        res.writeHead(201, {
            'Content-Type': 'application/json'
        });

        const result = {
            "status": "success",
            "user": user
        }

        res.end(JSON.stringify(result));
    });
};

module.exports = createUser;
