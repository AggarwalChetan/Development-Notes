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


// **********Directory******************

// create
fs.mkdirSync("myDirectory");

// delete
fs.rmdirSync("myDirectory");

// directory -> list of files on that path 
let address = "C:\\Users\\chetaagg\\Desktop\\Dev\\Module_1_FS";
let content = fs.readdirSync(address);

// to check if the path exists or not
let doesExist = fs.existsSync("fs1.js");
console.log("This path exists ? ", doesExist);


// path belongs to a directory or file
let statsOfPath = fs.lstatSync("dir1");
console.log("stats", statsOfPath);

// if a path is of file or not 
console.log("isFile? ", statsOfPath.isFile());

// if a path is of directory or not
console.log("isDirectory", statsOfPath.isDirectory());


// copy
// firstParam -> srcFilePath -> path of file from which content to be copied
// secondParam -> destPath -> path of the file into which you want to copy the content
let srcFilePath = "";
let destFilePath = "";
fs.copyFileSync(srcFilePath, destFilePath);