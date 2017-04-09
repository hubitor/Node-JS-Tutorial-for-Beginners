//#30 - Handling POST Requests

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//store the 'body-parser' middleware module in a variable, to handle the parsing of our POST data from the form
var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

//'urlencodedParser' is invoked when we receive a POST request from the form in the 'contact' view -> gets url-encoded bodies
//'urlencodedParser' parses the data and stores it in the 'body' property of the 'request' object
app.post('/contact', urlencodedParser, function (request, response) {
  console.log(request.body);
  response.render('contact-success', {data: request.body});
})

app.get('/profile/:name', function(request, response) {
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  response.render('profile', {person: request.params.name, data: data});
});

app.listen(3000);