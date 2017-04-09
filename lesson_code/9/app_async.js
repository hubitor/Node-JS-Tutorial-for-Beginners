//'fs' stores a reference to the 'modules.exports' object from the built-in module 'fs'
//module enables us to read and write files
var fs = require('fs');

//method of the fs module that can read files (asynchronous, i.e. not blocking (or "non-blocking") the flow of execution!!)
//1. param: (full) path; 2. param: character encoding; 3. param: callback to fire when request has been answered
fs.readFile('readMe.txt', 'utf8', function(error, data) {
  //since we are dealing with an asynchronous method we have to nest functions if we don't want them to be called before the request has been processed (e.g. like console.log("test"); below)
  fs.writeFile('writeMe', data);
});

console.log("test");

//method of the fs module that can write files (asynchronous, i.e. not blocking (or "non-blocking") the flow of execution!!)
//1. param: file to write to; 2. param: what to write
//fs.writeFileSync('writeMe.txt', 'test');