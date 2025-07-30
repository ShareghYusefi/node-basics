// What is Node JS?
// Node is a an open-source, cross-platform, Javascript runtime environment allowing execution of Javascript outside of a browser.
// In the past, Javascript was only used for client-side(browser) scripting.
// With the introduction of Node JS, we can now run javascript on a server(computer).
// Node JS is built on Chromes V8 Javascript engine. Firefox uses SpiderMonkey, and Internet Explorer run Chakra.

// We can create a web server using Node via the HTTP module.
// A web server is a software that listen for incoming requests over the HTTP protocal and send back a response.

// What are modules in Node?
// Modules are like libraries in node. They are reusable block of code. There built in modules provided by node and third party modules available on the web.

// we can use the 'require' keyword to import modules
var http = require("http");

// () => {} is an arrow function in javascript which is used to replace traditional anonymous functions: function(){}
// createServer function takes a callback function as an argument
// The callback function takes two arguments, the request(req) & response(res) objects.
const server = http.createServer((req, res) => {
  // write a response to the client(browser) using the .end function
  console.log("Request came in!");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello world"}');
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node app.js`
