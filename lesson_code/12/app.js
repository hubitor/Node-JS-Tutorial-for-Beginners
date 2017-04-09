//#12 - Creating a Server (local-hosted server)

var http = require('http');

//create a server using the 'createrServer' method and pass a callback to handle the request(s)
//the callback takes two parameters, the request object and the response object (the callback is invoked when a request is received)
//the request object contains information details about the request that has been made
//the response object is used to send a response back to the client (header and data,; see below)
var server = http.createServer(function(request, response) {
  //logs the url the request was made from
  console.log('request was made: ' + request.url);
  //setting up the response header (see word file for details)
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //end response and send it to the client along with some data (argument of '.end') and the header
  response.end('Hey there!');
});

//Specify a port for our application to listen for requests
server.listen(3000, '127.0.0.1');
//check if we are listening
console.log("We are listening to port 3000!");