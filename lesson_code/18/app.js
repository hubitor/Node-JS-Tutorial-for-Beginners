//#18 - Serving JSON Data

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  console.log('request was made: ' + request.url);
  response.writeHead(200, {
    //switching from 'text/html' to 'application/json' to inform the browser that we are sending a JSON object
    'Content-Type': 'application/json'
  });

  //instead of using streams we are going to sent the data to the response object directly by using the #.end()' method
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };
  
  //Note: Because we don't have to read any files here, we can just use the '.end()' method instead of reading first and then piping
  //sent data back to the client (we can't just pass myObj, because '.end()' expects a string or a buffer as an argument)
  //Thus, we transform the object into a string in JSON format
  response.end(JSON.stringify(myObj));
  //the URL can now serve as an API endpoint returning a JSON object; e.g. some JS in a Front-End application can now request and then process the JSON object (mainly to uopdate the view)
  //for further information: https://en.wikipedia.org/wiki/Web_API#Endpoints
});

server.listen(3000, '127.0.0.1');
console.log("We are listening to port 3000!");
