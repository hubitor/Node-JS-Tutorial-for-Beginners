//#29 - Query Strings

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

//Setting up routes in express
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/contact', function(request, response) {
  //pass the additional data received from the URL and stored in the 'request.query' object to the view
  response.render('contact', {qs: request.query});
});

app.get('/profile/:name', function(request, response) {
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  response.render('profile', {person: request.params.name, data: data});
});


app.listen(3000);