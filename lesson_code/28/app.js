var express = require('express');

var app = express();

app.set('view engine', 'ejs');
//Define middleware with 'app.use()' -> if no route is matched, the middleware applies to all requests
/*
app.use('/assets', function(request, response, next) {
  console.log(reuest.url);
  next();
});
*/

//Map the route '/assets' to the folder 'assets' where the static file styles.css is stored
//Whenever a static file request is made now (like from index.ejs), the express built-in middleware handles the request, serving up the file
app.use('/assets', express.static('assets'));

//Setting up routes in express
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/contact', function(request, response) {
  response.render('contact');
});

app.get('/profile/:name', function(request, response) {
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  response.render('profile', {person: request.params.name, data: data});
});


app.listen(3000);