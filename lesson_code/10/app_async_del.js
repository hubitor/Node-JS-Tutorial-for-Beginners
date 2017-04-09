//#10 - Creating & Removing Directories

var fs = require('fs');

//to delete a directory it has to be empty first
fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff');
});