/*
*  Route to various site pages using express framework
*
*/

var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/create", function(req, res) {
    res.render("create");
});

app.get("/courses", function(req, res) {
    res.render("courses");
});

/*
app.get("/course", function(req, res) {
    res.send("View the specific course details with graph!");
});

app.get("/course/:parameter", function(req, res) {
    var page = req.params.parameter;
    res.send("You are visiting a subpage: " + page + "!\n");
});

app.get("/search", function(req, res) {
    res.render("search");
});

app.get("/found", function(req, res) {
    res.render("found");
});

app.get("/view", function(req, res) {
    res.render("view");
    res.send("view your course details (including COOL GRAPH!");
});
*/

app.get("*", function(req, res) {
    res.send("error message with obligatory cute baby animal photo");
});

app.listen(8080 || process.env.PORT, function(req, res) {
    console.log("server started!\n");
});
