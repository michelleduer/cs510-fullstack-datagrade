/*
*  Route to various site pages using node.js with express framework
*/

var express = require("express");
var parser = require("body-parser");
var static = require("serve-static-middleware");
var mysql = require("mysql");

var app = express();

/*
* source on how to implement ejs templating:
* https://scotch.io/tutorials/use-ejs-to-template-your-node-application
 */
app.set("view engine", "ejs");

app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use(express.static('public'));

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

    var q = "SELECT * FROM users WHERE user='" + user + "'";
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to DB!")

        con.query(q, function(err, result) {
            if (err) throw err;

            if (result.length >= 1) {
                if (result[0].user === user && result[0].pwd === pwd) {
                    con.end();
                    res.status(200).send('200');
                }
            } else {
                con.end();
                res.status(307).send('307');
            }
        })
    });
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
        'Content-Type': 'text/html'
    });

    var user = req.body.user;
    var pwd = req.body.password;

    var q = "SELECT * FROM users WHERE user='" + user + "'";
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to DB!")

        con.query(q, function(err, result) {
            if (err) throw err;

            if (result.length < 1) {
                q = "INSERT INTO users (user,pwd) VALUES ('" + user + "','" + pwd + "');";

                con.query(q, function(err, result) {
                    if (err) throw err;
                    con.end();
                    res.status(200).send('200');
                })
            } else {
                con.end();
                res.status(307).send('307');
            }
        })
    });

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

    //console.log(courseID);
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

app.listen(8080 || process.env.PORT, function(req, res) {
    console.log("server started!\n");
});

