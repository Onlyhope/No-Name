// Equivalent to server.js

// Get relevant libraries and framework
var express = require('express');
var app = express();

// Setting port to use
app.set('port', (process.env.PORT || 5000));

// Setting express directory
app.use(express.static(__dirname));

// GET Requests
app.get('/', function(request, response) {
	response.render('index');
});


// Make app listen to port
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});