//#14 - Readable Streams

var http = require('http');
var fs = require('fs');

//creates a readable stream which we can read data from; optional param: 'utf8' for character encoding
//The data in readMe.txt is read piece by piece, bundled by the buffer and passed on as a chunk to the variable myReadStream at a time
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');

//we can recognize when we receive a chunk of data, since the method 'createReadStream' inherits from the 'evenEmitter'
//'data' is an event of 'createReadStream', thus every time a chunk of data is passed on, the callback is invoked
//instead of waiting for the whole file to be read and passed on (like 'fs.readFile' did), we can can read and pass on "chunks" to the client (faster!)
myReadStream.on('data', function(chunk) {
  console.log('New chunk arrived!');
  console.log(chunk);
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