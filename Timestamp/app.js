/*
  Made By Daniel Philip Johnson


*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let get_ip = require('ipware')().get_ip;

// Init App
const app = express();


// Load View Engine

app.use(express.static(__dirname + '/views'));
// might use pug
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));


// Home Route
app.get('/', function(req, res){

   res.render("index");


});
// TimeStamp route
let timestamp = require('./routes/timestamp');
app.use('/timestamp', timestamp);


// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});