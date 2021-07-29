let path = require('path');
let fs = require('fs');

let args = process.argv.slice(2);

let dirPath = args[0];
let dirContent = fs.readdirSync(dirPath);
let res = "";
for(let i = 0; i < dirContent.length; ++ i){
    let content = fs.lstatSync(path.join(dirPath, dirContent[i]));
    if(content.isFile()){
        res += fs.readFileSync(path.join(dirPath, dirContent[i]));
    }
}

fs.writeFileSync("content.cmd", res);
console.log("content is created");