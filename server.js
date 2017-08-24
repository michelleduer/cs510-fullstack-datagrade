'use strict';

var express = require('express');
var server = express();
var path = require('path');

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/course_entry.html'));
});


server.listen(8080);