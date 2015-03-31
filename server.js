/**
 * Created by alexpersian on 3/16/15.
 */

// server.js

/**
 * modules
 */
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');

/**
 * configuration
 */

// configure mongo database
var db = require('./config/db');

// set up the port for the app
var port = process.env.PORT || 8080;

// connect to the mongoDB database
mongoose.connect(db.url);

// get all data of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location, /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

/**
 * routes
 */
require('./app/routes')(app);

/* testing */
app.use('/js', express.static(__dirname + '/js'));
app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('/public/index.html', { root: __dirname });
});

/**
 * start the app
 */
app.listen(port);
console.log('Magic is happening on port: ' + port);

// expose the app itself
exports = module.exports = app;