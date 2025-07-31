// What is Node JS?
// Node is a an open-source, cross-platform, Javascript runtime environment allowing execution of Javascript outside of a browser.
// In the past, Javascript was only used for client-side(browser) scripting.
// With the introduction of Node JS, we can now run javascript on a server(computer).
// Node JS is built on Chromes V8 Javascript engine. Firefox uses SpiderMonkey, and Internet Explorer run Chakra.

// We can create a web server using Node via the HTTP module.
// A web server is a software that listen for incoming requests over the HTTP protocal and send back a response.

// What are modules in Node?
// Modules are like libraries in node. They are reusable block of code. There built in modules provided by node and third party modules available on the web.

// Any file in node is considered a module, giving us the ability to import and export code between files.
// var module = require("node:module");
// console.log(module);

// import logger module
const loggerFunction = require("./logger");
// ./ : current directory
// ../ : parent directory
// / : root directory of filesystem

// var, let, const are used to define variables of node modules.

// What are some built in modules in Node?
// 1. http to create a web server
// 2. fs: to work with files in the server file system (read, write, update, and delete files)
// 3. path: to wor with file paths.
const path = require("node:path");
// __filename is a global object in node which gives the absolute path of the current file.
var x = path.parse(__filename);
console.log(x);
// 4. OS: to get information about the operating system
const os = require("node:os");
var type = os.type();
console.log(type);
var freeMemory = os.freemem(); // return the amount of free memory in bytes.
var totalMemory = os.totalmem();
console.log(freeMemory);
console.log(totalMemory);

// npm init will setup package.json file.
// Json data is a collection of key-value pairs in string format.
// npm install will create node_module folder and install relevant modules.
// Install external modules in node.
// npm install <module-name> or npm i <module-name>
const ospath = require("ospath");
console.log(ospath.home());

// we can use the 'require' keyword to import modules
var http = require("http");

// () => {} is an arrow function in javascript which is used to replace traditional anonymous functions: function(){}
// createServer function takes a callback function as an argument
// The callback function takes two arguments, the request(req) & response(res) objects.
const server = http.createServer((req, res) => {
  // write a response to the client(browser) using the .end function
  loggerFunction("Request came in!");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello world"}');
});

// events in node js
const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();
myEmitter.on("fire", () => {
  console.log("an event occurred!");
});
// emit 'fire' event
myEmitter.emit("fire");

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `node app.js`

// Semantic Versioning
// Major.Minor.Patch
// Caret(^): ^1.2.2 means install the latest version of 1.x.x
// Tilda(~): ~1.2.2 means install the latest version of 1.2.x

// How can we update our packages?
// 'npm outdated' will show you the outdated packages.
// 'npm update' will update all packages to the latest version
// 'npm install <package-name>@1.2.2' will install the specific version
// 'npm install <package-name>@latest' will intall the latest version
