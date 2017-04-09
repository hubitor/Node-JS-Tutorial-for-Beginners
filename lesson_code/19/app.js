//#19 - Basic Routing

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  console.log('request was made: ' + request.url);
  //Basic rounting of data depending on the requests (express is making this manual process easier)
  if (request.url === '/home' || request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(__dirname + '/index.html').pipe(response);
  } else if (request.url === '/contact') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(__dirname + '/contact.html').pipe(response);
  } else if (request.url === '/api/ninjas') {
    var ninjas = [{
      name: 'Ryu',
      age: 25
    }, {
      name: 'Yoshi',
      age: 35
    }];
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(ninjas));
  } else {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(__dirname + '/404.html').pipe(response);
  }
});

server.listen(3000, '127.0.0.1');
console.log("We are listening to port 3000!");
