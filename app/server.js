//Dependencies
var inquirer = require("inquirer");
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
// This tells node we're creating an express server.
var app = express();
//setting initial port
var PORT = process.env.PORT || 3004;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router
//Points server to the route files.
// They map the server response when the users visit or request data from the urls.
require("../app/routing/apiRoutes")(app);
require("../app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" the server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
