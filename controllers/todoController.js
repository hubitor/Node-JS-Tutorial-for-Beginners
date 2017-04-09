var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Connect to the database
mongoose.connect('mongodb://test:test@ds151820.mlab.com:51820/to-do-app');

//Create a schema for todo-items ("blueprint" for our data; data for the database to "expect")
var todoSchema = new mongoose.Schema({
  //here we declare what our todo-items are going to "look" like (here: one property, 'item', with a string value)
  item: String
});

//Create a todo 'model' to base it on the schema ("collection")
var Todo = mongoose.model('Todo', todoSchema);

//JS code that controlls the bevahior of our To-Do application
//(like grabbing data from the 'model', processing data, handling the routes, passing the processed data on to the 'view', ...)
module.exports = function (app) {
  
  //set up all request handlers here
  app.get('/todo', function (req, res) {
    //get all data from mongoDB (in the 'todos' collection) and pass it to the view
    Todo.find({}, function(err, data) {
      if(err) throw err;
      console.log(data);
      res.render('todo', {todos: data});
    });
    
  });

  //handler is invoked when the ajax request in '/assets/todo-list.js' is made
  //urlencodedParser -> used as middleware here granting access to the data sent (via the request object)
  app.post('/todo', urlencodedParser, function (req, res) {
    //get data from th view and add it to mongoDB
    var newTodo = Todo(req.body).save(function(err, data) {
      if(err) throw err;
      //send the data array back to the ajax request as a JSON object (just refreshes the page)
      res.json(data);
    });
  });

  app.delete('/todo/:item', function (req, res) {
    //delete the requested item from mongoDB
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
      if(err) throw err;
      res.json(data);
    });
  });
};
