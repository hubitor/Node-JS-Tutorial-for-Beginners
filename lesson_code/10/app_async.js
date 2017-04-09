//#10 - Creating & Removing Directories

var fs = require('fs');

//creates a file 'writeMe.txt' in a new directory 'stuff' with the content of 'readMe.txt'
//1. param: directory name; 2. param: callback
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(error, data) {
    fs.writeFile('./stuff/writeMe.txt', data);
  });
});