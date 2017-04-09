//#17 - Serving HTML Pages

var http = require('http');
var fs = require('fs');



//the response object is also a writable stream we can write data to
var server = http.createServer(function (request, response) {
  console.log('request was made: ' + request.url);
  response.writeHead(200, {
    //switching from '/plain' to '/html' to inform the browser that we are sending html files
    'Content-Type': 'text/html'
  });

  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log("We are listening to port 3000!");
