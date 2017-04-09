//#6 – Modules and require()

var counter = function(arr) {
	return "This array stores " + arr.length + " items!";
}

//console.log(counter(["asdf", "qwert", "yxcv"]));

//makes the counter function available for usage in other modules (if required)
module.exports = counter;