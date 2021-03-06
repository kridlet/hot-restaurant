var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [
    {
        name: "Dirk",
        phone_number: "602-327-3802",
        email: "d@irk.com",
        id: "1"
    },
    {
        name: "Sara",
        phone_number: "602-327-3801",
        email: "s@irk.com",
        id: "2"
    }
];

var waitlist  = [
    {
        name: "Ant",
        phone_number: "602-327-3803",
        email: "d@irk.com",
        id: "3"
    },
    {
        name: "Matt",
        phone_number: "602-327-3804",
        email: "s@irk.com",
        id: "3"
    }
];


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

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
})

//retrieve data
//post data
// Create New Characters - takes in JSON input
app.post("/api/reservations", function(req, res) {
    console.log(req.body);
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    if (reservations.length < 5) {
        reservations.push(newReservation);
    } else {
        waitlist.push(newReservation);
    }
        // res.json(newReservation);
        // res.json(waitlist);
  });



//final - call api from html (jquery get and post)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  