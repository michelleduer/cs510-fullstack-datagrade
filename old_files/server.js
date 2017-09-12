'use strict';

var express = require('express');
var server = express();
var path = require('path');

server.get('/course_entry.html', function(req, res) {
    res.set({
        'Content-Type': 'text/html'
    });
    res.sendFile(path.join(__dirname + '/course_entry.html'));
});

server.use('/', express.static(__dirname + '/'));

server.listen(8080);
