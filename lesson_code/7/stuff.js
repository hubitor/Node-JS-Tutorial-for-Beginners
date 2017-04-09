//Exporting more than just one variable

/*
var counter = function (arr) {
	return "This array stores " + arr.length + " items!";
}

var adder = function (a, b) {
	//Template String (ES6)
	return `The sum of the two numbers is ${a + b}!`;
}

var pi = 3.142;

//makes the different functions available for usage in other modules (if "required")
module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
};
*/


//Same as above but writing less code

module.exports.counter = function (arr) {
	return "This array stores " + arr.length + " items!";
}

module.exports.adder = function (a, b) {
	//Template String (ES6)
	return `The sum of the two numbers is ${a + b}!`;
}

module.exports.pi = 3.142;
