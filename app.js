var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [{
    name: "Dirk",
    phone_number: 602-327-3802,
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

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
})
//reserve route
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"));
})

app.get("/api/reservations", function(res, req){
    return res.json(reservations);
});

//retrieve data
//post data


//final - call api from html (jquery get and post)