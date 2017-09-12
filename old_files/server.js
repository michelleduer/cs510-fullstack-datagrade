'use strict';

var express = require('express');
var mysql = require('mysql')
var parser = require('body-parser');
var server = express();
var path = require('path');

/*
* SERVER CONNECTION
 */
server.use(parser.urlencoded({
    'extended': false,
    'limit': 1024
}));

server.get('/find_course.html', function(req, res) { // help from Simon
    res.set({
        'Content-Type': 'text/html'
    });
    res.sendFile(path.join(__dirname + '/html/find_course.html'));
});

server.use('/', express.static(__dirname + '/')); // help from Simon

server.post('/result',function(req,res){
    var id = req.body.courseID;
    var lastName = req.body.lastName;
    console.log("SUCCESS! id = " + id + ", last name = " + lastName);

});

/*
* DATABASE CONNECTION
*/
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'student',
    password : 'secret',
    database : 'datag'
});

db.connect()

// TEST database connection
/*
db.query('SELECT * FROM courses', function (err, rows, fields) {
    if (err) throw err

    console.log('The courses table contains: ', rows)
}) */

db.end()

server.listen(8080);
