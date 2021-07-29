let fs = require("fs");
let path = require("path");

// path -> paths -> platform independent
// path.basename();
// path.dirname();
// path.extname();
// path.join();

// input
// let inputArr = process.argv.slice(2);
// let fileName = inputArr[0];
// let content = inputArr[1];

// console.log("fileName", cmd);
// console.log("content", path);

// current path of directory
let currentPath = process.cwd();
// console.log("currentPath", currentPath);
// path // path -> paths -> platform independent
let filePath = path.join(currentPath, "dir1", "fileName");
console.log("filePath", filePath);
// fs.writeFileSync(filePath);

// Extension
// let extension = path.extension(filePath);
// console.log(extension);

// returns the last part of the path
let srcFileName = path.basename(filePath);