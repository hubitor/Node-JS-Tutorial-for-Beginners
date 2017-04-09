//#10 - Creating & Removing Directories

var fs = require('fs');

//create a directory -> param: directory name
fs.mkdirSync('stuff');

//delete a directory -> param: directory name
fs.rmdirSync('stuff');