// to build the path
// path 
let path = require('path');

// current directory in which command is executing
let currentPath = process.cwd();
console.log("currentPath", currentPath);

// path join
let joinedPath = path.join(currentPath, "abc", "def", "ghi");