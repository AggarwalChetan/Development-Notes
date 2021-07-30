// file system module
// files, folder deal help

let fs = require('fs');
// file -> create / delete / update / move
// folder -> content read, create, remove

// ****************file create / delete / update / move ********

// read
let content = fs.readFileSync("f1.txt");
console.log("content :", content);
console.log("content :" + content);

// write -> writeFileSync();
// file doesn't exist -> file create, content put
// file does exist -> content override
fs.writeFileSync("abc.txt", "Hello World");

// append
fs.appendFileSync("abc.txt", " in Js");

// delete a file by passing it's path
fs.unlinkSync("abc.txt");
console.log("file removed");



