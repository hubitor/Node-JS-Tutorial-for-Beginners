//Using built-in core modules of Node.js (no paths required, like for custom modules)

//'events' stores a reference to the 'modules.exports' object from the built-in module 'events'
var events = require("events");

//'util' allows us to inherit certain things from all built-in Node.js objects
var util = require("util");

var Person = function(name) {
	this.name = name;
};

//every Person created with the 'Person' constructor can now have custom events attached to it
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person) {
	//Since we inherited 'EventEmitter' to each Person object using the Person constructor we can now attach custom events to each Person object
	person.on('speak', function(msg) {
		console.log(person.name + " said: " + msg);
	});
});

//emits 'speak' manually and invokes the callback function
james.emit('speak', "Hey dudes, what's up?");
mary.emit('speak', "I like horses!");