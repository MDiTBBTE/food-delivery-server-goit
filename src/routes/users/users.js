const fs = require("fs");

const users = (request, response) => {
  fs.readFile("src/db/users.json", "utf8", (err, data) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(data);
    response.end();
  });
};

module.exports = users;
