let tree = require('./commands/tree.js');
let organize = require('./commands/organize');
let help = require('./commands/help');

let inputArr = process.argv.slice(2);
let inputFileName = inputArr[0];
let inputPath = inputArr[1];

switch(inputFileName){
    case "tree": 
        tree.fn(inputPath);
        break;
    case "help":
        help.fn(inputPath);
        break;
    case "organize":
        help.fn(inputPath);
        break;
    default:
        console.log("Invalid input");
}
