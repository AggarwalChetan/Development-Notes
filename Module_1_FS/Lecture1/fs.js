// implementation -> files / folder interact
// /directory
// files -> read / write / update delete
let fs = require("fs");
let path = require('path');
// for reading the file by passing it's path
// let content = fs.readFileSync("f1.txt");
// buffer -> video, audio, text
// console.log("content : ", content);
// + -> concatenate -> string => text
// console.log("content : " +  content);
// write -> writeFileSync
// file doesn't exist -> file create, content put
// file doesn't exist -> content ovveride
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");
// update 
// fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai");
// fs.unlinkSync("abc.txt");

// ***************Directory************
// create
// fs.mkdirSync("myDirectory");
// delete 
// fs.rmdirSync("myDirectory");

// path -> check does it exist or not
// let doesExist = fs.existsSync("fs.js");

// let statsOfAPath = fs.lstatSync("dir1");
// console.log("stats", statsOfAPath);
// console.log("isFile? ", statsOfAPath.isFile());
// console.log("isDirectory? ", statsOfAPath.isDirectory());
// directory -> content
// let address = "C:\\Users\\chetaagg\\Desktop\\Dev\\Module_1_FS";
// let contentDir = fs.readdirSync(address);
// console.log("directory content", contentDir);

// Copy File 
// First Parameter -> src file path
// second Parameter -> dest file Path
let srcFilePath = "C:\\Users\\chetaagg\\Desktop\\Dev\\Module_0_JS\\Lecture1\\string.js";
let destFolderPath = "C:\\Users\\chetaagg\\Desktop\\Dev\\Module_1_FS\\fun_with_fs";
let srcFileName = path.basename(srcFilePath);
let destFilePath = path.join(destFolderPath, srcFileName);
fs.copyFileSync(srcFilePath, destFilePath);
