//'stuff' stores a reference to the 'module.exports' object from our custom module stuff.js
var stuff = require("./stuff");

console.log(stuff.counter([1, 2, 3]));
console.log(stuff.adder(stuff.pi, 3));
