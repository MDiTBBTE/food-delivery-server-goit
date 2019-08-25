const defaultsRoute = (request, response) => {
  // console.log(request.url);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(
    "<p>Chose /signup or /products route. They are accessable!</p> "
  );
  response.end();
};

module.exports = defaultsRoute;
