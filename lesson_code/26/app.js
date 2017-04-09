//#26 - Template Engines (part 2)

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

//Setting up routes in express
//responding to a static 'get' request
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(request, response) {
  response.sendFile(__dirname + '/contact.html');
});

//responding to a dynamic 'get' request (using route variables aka "route params", here ':id'(can be any name))
app.get('/profile/:name', function(request, response) {
  //make up some dummy data to insert into the view (usually received from a database)
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  response.render('profile', {person: request.params.name, data: data});
});


app.listen(3000);