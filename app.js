/*
*  Route to various site pages using express framework
*
*/


var express = require('express');
var app = express();

app.get("/", function(req, res) {
    console.log("server started!\n");
    res.send("home page! CREATE log-in and registering options");
});

app.get("/course/:parameter", function(req, res) {
    var page = req.params.parameter;
    res.send("You are visiting a subpage: " + page + "!\n");
});

app.get("/search", function(req, res) {
    res.send("search for course using course name and instructor's name");
});

app.get("/create", function(req, res) {
    res.send("create a new course");
});

app.get("/add", function(req, res) {
    res.send("found existing course, want to add it?");
});

app.get("/view", function(req, res) {
    res.send("view your course details (including COOL GRAPH!");
});

app.get("*", function(req, res) {
    res.send("error message with obligatory cute baby animal photo");
});

app.listen(8080 || process.env.PORT);
