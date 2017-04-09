//#25 - Template Engines

//we have to require express first (which returns a function), since after all it's just a module written in JS we can use in our application
var express = require('express');

//to get access to all the functionality (methods) express comes shipped with, we first have to invoke the required function
var app = express();

//tell express to use the module 'ejs' as its view engine (aka "template engine")
//enables express to inject dynamic content into an HTML file
app.set('view engine', 'ejs');

//Setting up routes in express
//responding to a static 'get' request with an HTML file using the express method '.sendFile()' on the response object
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(request, response) {
  response.sendFile(__dirname + '/contact.html');
});

//responding to a dynamic 'get' request (using route variables aka "route parameters", here ':id'(can be any name))
app.get('/profile/:name', function(request, response) {
  //make up some dummy data to insert into the view (usually received from a database)
  var data = {age: 29, job: 'ninja'};
  //instead of using 'response.sendFile()' we're using 'response.render()' to "render" the view (because we inject some dynamic content)
  //we pass an object as second parameter to the 'render' method with the requested 'name' as a value, to be availabe in the view (the method passes the object to the 'profile' template)
  response.render('profile', {person: request.params.name, data: data});
});


app.listen(3000);