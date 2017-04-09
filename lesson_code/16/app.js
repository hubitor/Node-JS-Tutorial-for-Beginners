//#16 – Pipes

var http = require('http');
var fs = require('fs');



//the response object is also a writable stream we can write data to
var server = http.createServer(function (request, response) {
  console.log('request was made: ' + request.url);
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt'); <- not needed anymore, since we write to the response object now

  //'.pipe()' can only be called on readable streams (since we are piping from a readable to a writeable stream, not vice versa)
  //does exactly the same as the code before; listening for the data event to occur and (once received) streaming the data to the client bit by bit
  myReadStream.pipe(response);

  //response.end('Hey there!'); <- '.pipe()' now ends the response and sends data down the stream to the client
});

server.listen(3000, '127.0.0.1');
console.log("We are listening to port 3000!");
