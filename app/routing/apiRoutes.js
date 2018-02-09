// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.

var friends = require("../data/friends");

// Routes

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("../data/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object) the JSON is pushed to the friends JavaScript array
  // (ex. User fills out friend survey... this data is then sent to the server...
  // Then the server saves the data to the friend array)
  // ---------------------------------------------------------------------------

  app.post("../data/friends", function(req, res) {
      friends.push(req.body);
      res.json(true);
  });
};