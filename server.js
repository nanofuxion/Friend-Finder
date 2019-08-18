// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.json());


//Routes
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Customers (DATA)
// =============================================================
var customers =[];
var customersAtTables = [];
var customersWaiting = [];  

// Displays customers at tables
app.get("/api/tables", function(req, res) {
  return res.json(customersAtTables);
});

// clear customers lists
app.get("/api/waitlist", function(req, res) {

  return res.json(customersWaiting);
});

app.get("#", function(req, res) {
    customersAtTables = [];
    customersWaiting = [];

  //return res.json(customersWaiting);
});

// add customers to tables and if customers exceed 5 add to waiting list
app.post("/api/tables", function(req, res) {

  var newCustomer = req.body;



  //console.log(newcustomer);
  console.log(customers);
  customers.push(newCustomer);

//   check if more than 5
  if (customers.length <= 5) customersAtTables.push(newCustomer);
  if (customers.length > 5) customersWaiting.push(newCustomer);

  res.json(newCustomer);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
