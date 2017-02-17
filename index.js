var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var database = require('./config/database');
var port = process.env.PORT || 8080;

mongoose.connect(database.url);

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
// app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

require('./app/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port);
