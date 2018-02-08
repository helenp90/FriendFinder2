//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Create our server

var server = http.createServer(handleRequest);
// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    var fs = require("fs")
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/public/home.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});