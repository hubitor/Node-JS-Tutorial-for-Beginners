var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//connect to the database
mongoose.connect('mongodb://test:test@ds151820.mlab.com:51820/to-do-app');

//Create a schema for todo-items ("blueprint" for our data; data for the database to "expect")
var todoSchema = new mongoose.Schema({
  //here we declare what our todo-items are going to "look" like (here: one property, 'item', with a string value)
  item: String
});

//Create a todo 'model' to base it on the schema ("collection")
var Todo = mongoose.model('Todo', todoSchema);

//Create items of type 'Todo' and push them to the database (each time the application runs)
var itemOne = Todo({item: 'get flowers'}).save(function(err) {
  if(err) throw err;
  console.log('Item saved');
});

//dummy data (pushed data is only temporarly stored on the server and deleted after a server restart)
var data = [{item: 'get milk'}, {item: 'do the dishes'}, {item: 'walk the dog'}];

//JS code that controlls the bevahior of our To-Do application
//(like grabbing data from the 'model', processing data, handling the routes, passing the processed data on to the 'view', ...)
module.exports = function (app) {
  //set up all request handlers here
  app.get('/todo', function (req, res) {
    res.render('todo', {todos: data});
  });

  //handler is invoked when the ajax request in '/assets/todo-list.js' is made
  //urlencodedParser -> used as middleware here granting access to the data sent (via the request object)
  app.post('/todo', urlencodedParser, function (req, res) {
    //push the received data to the data array
    data.push(req.body);
    //send the data array back to the ajax request as a JSON object
    res.json(data);

  });

  app.delete('/todo/:item', function (req, res) {
    
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });
};
