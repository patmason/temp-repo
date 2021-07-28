const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("this is the about page");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Home</a>
  `);
  }
});

server.listen(5000);
