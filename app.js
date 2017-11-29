/*
*  Route to various site pages using express framework
*/

var express = require("express");
var parser = require("body-parser");
var static = require("serve-static-middleware");

var passport = require("passport");
var strategy = require("passport-http");
var app = express();
app.set("view engine", "ejs");

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
/*
* source: https://github.com/passport/express-3.x-http-basic-example/blob/master/server.js
* and Simon's 6-auth.js solution from express assignments
 */
/*
passport.use(new strategy.BasicStrategy(
    function(user,pass,done) {
        if (user === "test") {
            if (pass === "secret") {
                return done(null, true);
            }
        }
        return done(null, false);
    }
));
*/


/*
* Login Page
*/
app.get("/", function(req, res) {
    res.render("pages/login");
});

app.get("/login", function(req, res) {
    res.render("pages/login");
});
/*
app.use(passport.authenticate('basic', {
    'session': false
}));
*/
app.post("/login", function(req, res) {
    var user = req.body.user;
    var pwd = req.body.password;
    console.log("RECEIVED: User: " + user + ", pass: " + pwd);
    if (user === "test" && pwd === "secret") {
        console.log("User and password verified!");
        next('route');
   } else {
        return res.end("Invalid username and/or password");
    }
});

/*
* Register Page
*/
app.get("/register", function(req, res) {
    res.render("pages/settings");
});
app.post("/register", function(req,res) {
    var user = req.body.user;
    var pwd = req.body.pwd;
    console.log("User: " + user + " with pwd: " + pwd + "\n");
    res.end("login attempted -- successful?");
});

app.get("/settings", function(req, res) {
    res.render("pages/settings");
});

app.get("/home", function(req, res) {
    res.render("pages/home");
});

app.get("/find", function(req, res) {
    res.render("pages/find");
});

app.post("/find", function(req, res) {
    var courseID = req.body.courseID;
    var instructor = req.body.instructor;
    var year = req.body.year;
    console.log("RECEIVED: courseID: " + courseID + "\ninstructor: " + instructor +
        "\nyear: " + year + "\n");
    res.end();
});

app.get("/list", function(req, res) {
    res.render("pages/list");
});

app.get("/add", function(req, res) {
    res.render("pages/add");
});


/*
app.post("/find", function(req, res) {
    res.send("FIND");
    //res.render("add");
});
*/

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
