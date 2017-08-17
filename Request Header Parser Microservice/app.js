const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let get_ip = require('ipware')().get_ip;

// Init App
const app = express();




// Home Route
app.get('/', function(req, res){
  var ip_info = get_ip(req);
  let ip_Add = ip_info['clientIp'];

   let user_agent = req.headers['user-agent'];
   let language = req.headers['accept-language']
   //console.log(req.socket.remoteAddress);

   //output
   res.json({"ipaddress":ip_Add,"language":language,"software":user_agent});
  //console.log(req);
});


// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});