var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [{
    name: "Dirk",
    phone_number: "602-327-3802",
    email: "d@irk.com",
    id: "1"
}];

var waitlist  = [];


//routes

//home

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})
//tables route

app.get("/table", function(req, res){
    res.sendFile(path.join(__dirname, "table.html"));
})
//reserve route
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
})

app.get("/api/reservations", function(req, res){
    return res.json(reservations);
});

//retrieve data
//post data
// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();  
    characters.push(newTable);
    res.json(newTable);
  });

//final - call api from html (jquery get and post)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  