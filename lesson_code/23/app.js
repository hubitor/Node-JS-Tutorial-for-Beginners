//#23 - Introduction to Express

//we have to require express first (which returns a function), since after all it's just a module written in JS we can use in our application
var express = require('express');

//to get access to all the functionality (methods) express comes shipped with, we first have to invoke the returned function
var app = express();

//Setting up routes in express
//responding to a 'get' request
app.get('/', function(request, response) {
  //'.send()' is an express method; it also automatically figures out the 'Content-Type' in the Headers
  response.send('Hello world!!');
});

app.get('/contact', function(request, response) {
  response.send('This is the contact section!');
});

app.listen(3000);