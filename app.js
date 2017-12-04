/*
*  Route to various site pages using express framework
*/

var express = require("express");
var parser = require("body-parser");
var static = require("serve-static-middleware");
var mysql = require("mysql");


//var passport = require("passport");
var strategy = require("passport-http");
var app = express();

/*
* Create and connect to relevant database
* Help from tutorial: https://www.udemy.com/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/learn/v4/t/lecture/6996806?start=0
 */
var con = mysql.createConnection({
    host : 'localhost',
    user : 'test',
    password : 'secret',
    database : 'datag'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB!")
});

var q = 'SELECT * FROM users';
//var q = 'USE datag;'
con.query(q, function(err, res) {
    if (err) throw err;
    console.log("The database found res: " + res[0].user + res[0].pwd);
});

/*
* source on how to implement ejs templating:
* https://scotch.io/tutorials/use-ejs-to-template-your-node-application
 */
app.set("view engine", "ejs");

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use(express.static('public'));
/*
app.use(passport.initialize());
app.use(passport.session());
*/
/*
* source: https://github.com/passport/express-3.x-http-basic-example/blob/master/server.js
* and Simon's 6-auth.js solution from express assignments
* hard-coded for testing and would want to improve this drastically
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
app.use(passport.authenticate('basic', {
    'session': false
}));
*/


/*
* Login Page
*/
app.get("/", function(req, res) {
    res.status(302);
    res.set({
        'Location':'/login'
    });
    res.end();
});

app.get("/login", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/login");
});
app.post("/login", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    var user = req.body.user;
    var pwd = req.body.password;
    console.log("RECEIVED: User: " + user + ", pass: " + pwd);
    if (user === "test" && pwd === "secret") {
        console.log("User and password verified!");
   } else {
        return res.end("Invalid username and/or password");
    }
});

/*
* Register Page
*/
app.get("/register", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/settings");
});
app.post("/register", function(req,res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    var user = req.body.user;
    var pwd = req.body.pwd;
    console.log("User: " + user + " with pwd: " + pwd + "\n");
    res.end("login attempted -- successful?");
});

app.get("/settings", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/settings");
});

app.get("/home", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/home");
});

/*
* Course Look-Up Page
 */
app.get("/find", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/find");
    var courseID = req.body.courseID;
    console.log(courseID);
});

app.post("/find", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.end();
});

app.get("/list", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/list");
});

app.get("/add", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/add");
});

app.get("/course", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/course");
    /*
    console.log("courseID: " + req.query.courseID);
    console.log("instructor: " + req.query.instructor);
    console.log("year: " + req.query.year);
    */

    /*
    var data = {"courseID":req.query.courseID,"instructor":req.query.instructor,"year":req.query.year}
    res.render("pages/course", {data: JSON.stringify(data)});
    */

});

app.post("/course", function(req, res) {
    res.status(200);
    res.set({
        'Content-Type':'text/html'
    });
    console.log("courseID in post course = " + req.query.courseID );
    res.end();
});

app.get("*", function(req, res) {
    res.status(404);
    res.set({
        'Content-Type':'text/html'
    });
    res.render("pages/error");
});

/*
* Close Database
 */
con.end();

app.listen(8080 || process.env.PORT, function(req, res) {
    console.log("server started!\n");
});
