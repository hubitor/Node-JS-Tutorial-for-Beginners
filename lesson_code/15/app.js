//#15 - Writable Streams

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//creates a writable stream which we can write data to and send it somewhere
//using param to specify where the data is going to
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk) {
  console.log('New chunk arrived!');
  //write the data chunk we received to the 'writeMe.txt' file
  myWriteStream.write(chunk);
});


/*
var server = http.createServer(function(request, response) {
  console.log('request was made: ' + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hey there!');
});

server.listen(3000, '127.0.0.1');
console.log("We are listening to port 3000!");
*/