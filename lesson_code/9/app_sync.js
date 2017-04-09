//'fs' stores a reference to the 'modules.exports' object from the built-in module 'fs'
//module enables us to read and write files
var fs = require('fs');

//method of the fs module that can read files (synchronous, i.e. blocking the flow of execution!!)
//1. param: (full) path; 2. param: character encoding (binary data!)
var readMe = fs.readFileSync('readMe.txt', 'utf8');

//method of the fs module that can write files (synchronous, i.e. blocking the flow of execution!!)
//1. param: file to write to; 2. param: what to write
fs.writeFileSync('writeMe.txt', readMe);
fs.writeFileSync('writeMe2.txt', 'test');

//deletes a file
fs.unlink('writeMe2.txt');