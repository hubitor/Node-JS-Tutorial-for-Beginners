//#27 - Partial Templates

var express = require('express');

var app = express();

//tell express to use the module 'ejs' as its view engine (aka "template engine")
//enables express to inject dynamic content into an HTML file
app.set('view engine', 'ejs');

//Setting up routes in express
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/contact', function(request, response) {
  response.render('contact');
});

//responding to a dynamic 'get' request (using route variables aka "route parameters", here ':id'(can be any name))
app.get('/profile/:name', function(request, response) {
  //make up some dummy data to insert into the view (usually received from a database)
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  //instead of using 'response.sendFile' we're using 'response.render' to "render" the view (because we inject some dynamic content)
  //we pass an object as second parameter to the 'render' method with the requested 'name' as a value, to be availabe in the template (the method passes the object to the 'profile' view)
  response.render('profile', {person: request.params.name, data: data});
});


app.listen(3000);