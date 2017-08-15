const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let get_ip = require('ipware')().get_ip;

// Init App
const app = express();




// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));


// Home Route
app.get('/', function(req, res){
  var ip_info = get_ip(req);
  console.log(ip_info['clientIp']);
  //res.send(res);
   res.send('ip: ' + req.connection.remoteAddress);
   // user agent sorted
   console.log(req.headers['user-agent'])
   console.log(req.headers['accept-language']);
   console.log(req.socket.remoteAddress);
  //console.log(req);
});
// Home Route
app.get('/:id', function(req, res){
  //res.send(res);
   res.send('id: ' + req.params.id);
  //console.log(req);
});


// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});