//Using built-in core modules of Node.js (no paths required, like for custom modules)

//'events' stores a reference to the 'modules.exports' object from the built-in module 'events'
var events = require("events");

//creating custom events (similiar to jQuery: element.on('click', function() {}))
//creating a custom 'EvenEmitter' object 'myEmitter' with the 'EvenEmitter()' constructor
var myEmitter = new events.EventEmitter();

//'myEmitter' is listening for 'someEvent' to be emitted
//When 'someEvent' occurs ("emits") then invoke the function expression (callback)
myEmitter.on('someEvent', function(msg) {
	console.log(msg);
});

//emits 'someEvent' manually! and invokes the callback function
myEmitter.emit('someEvent', 'The event was emitted!');