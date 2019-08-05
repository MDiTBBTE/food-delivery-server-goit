const fs = require("fs");

const options = {
  username: "Ivan",
  telephone: "063 777 77 77",
  password: "12345",
  email: "ivan@gmail.com"
};

function rendomSuccess(min, max) {
  let num = Math.floor(Math.random() * (max - min) + min);
  let string;
  num === 1 ? (string = true) : (string = false);
  return string;
}

const signUpRoute = (request, response) => {
  fs.readFile("src/db/users.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }

    const data = JSON.parse(jsonString);

    if (rendomSuccess(1, 3)) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("<h1>User is signed up!</h1>");
      response.end();

      data.push({
        status: "success",
        user: {
          ...options,
          username: "Loha",
          telephone: "050 382 31 12",
          email: "adblock@gmail.com"
        }
      });
    } else {
      response.write("<h1>User wrote incorects data!</h1>");
      response.end();
    }

    fs.writeFileSync("src/db/users.json", JSON.stringify(data));
  });
};

module.exports = signUpRoute;
