// to build the path
// path 
let path = require('path');

// current directory in which command is executing
let currentPath = process.cwd();
console.log("currentPath", currentPath);

// path join
let joinedPath = path.join(currentPath, "abc", "def", "ghi");
console.log(joinedPath);

// baseName
// used to get fileName from the path
let lastPortion = path.basename(joinedPath);
console.log(lastPortion);

// path -> extension
let ext = path.extname(joinedPath);
console.log(ext);