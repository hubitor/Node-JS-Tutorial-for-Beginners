var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//handle static files
//not route specific, i.e. the middleware will run on each request (whether from a URL or file), but only returns sth. if it finds sth.
//e.g. the request from the 'todo.ejs' view returns the css file from '/public/assets/styles.css
app.use(express.static('./public'))

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');