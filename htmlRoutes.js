var path = require("path");


module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page
        app.get("/", function(req, res) {
        // res.send("Welcome to the Friend Finder Page!")
        res.sendFile(path.join(__dirname, "/../public/Home.html"));
    });
  
  app.get("/survey", function(req, res) {
      // res.send("Welcome to the Friend Finder Page!")
      res.sendFile(path.join(__dirname, "/../public/Survey.html"));
    });

}