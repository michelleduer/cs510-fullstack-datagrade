'use strict';

var express = require('express');
var mysql = require('mysql')
var server = express();
var path = require('path');

/*
* SERVER CONNECTION
 */
server.get('/find_course.html', function(req, res) { // help from Simon
    res.set({
        'Content-Type': 'text/html'
    });
    res.sendFile(path.join(__dirname + '/html/find_course.html'));
});

server.use('/', express.static(__dirname + '/')); // help from Simon


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

db.query('SELECT * FROM courses', function (err, rows, fields) {
    if (err) throw err

    console.log('The courses table contains: ', rows)
})

db.end()

server.listen(8080);
