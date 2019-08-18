var path = require('path');

//route

module.exports = function (app) {

    // Routes
    // =============================================================

    // Basic route that sends the user first to the AJAX Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/resrevations.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
  // app.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname, "index.html"));
  // });
