//#6 – Modules and require()

/*require("./count") returns the counter function from count.js
since it has been made available via 'module.exports'. THe variable
'counter' here has now a reference to the counter function from count.js.*/
var count = require("./count");

console.log(count([1, 2, 3, 4]));