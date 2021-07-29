let fs = require("fs");
let path = require("path");

let args = process.argv.slice(2);
let dirName = args[0];
let dirPath = path.join(dirName);
let isDirPresent = fs.existsSync(dirName);

if(isDirPresent){
    console.log("Directory Already Present");
    return;
}


fs.mkdirSync(dirName);
console.log(dirName + " directory created");

for(let i = 1; i <= 3; ++ i){
    let innerDirPath = path.join(dirPath, args[i]);
    fs.mkdirSync(innerDirPath);

    console.log(args[i] + " directory created");

    for(let j = 1; j <= 5; ++ j){
        let moduleDirPath = path.join(innerDirPath, "Module" + j);
        fs.mkdirSync(moduleDirPath);
        console.log("Module" + j + " created");
        let filePath = path.join(moduleDirPath, "content.md");
        fs.writeFileSync(filePath, "Hello");
    }
}

// let dir1 = args[1];
// let dir2 = args[2];
// let dir3 = args[3];



// fs.mkdirSync(path.join(dirName, dir2));
// fs.mkdirSync(path.join(dirName, dir3));

// for(let i = 1; i <= 5; ++ i){
//     fs.mkdirSync(path.join(dirName, dir1, "Module" + i));
//     fs.writeFileSync(path.join(dirName, dir1, "Module" + i, "content.md"), "Hello");
//     fs.mkdirSync(path.join(dirName, dir2, "Module" + i));
//     fs.writeFileSync(path.join(dirName, dir2, "Module" + i, "content.md"), "Hello");
//     fs.mkdirSync(path.join(dirName, dir3, "Module" + i));
//     fs.writeFileSync(path.join(dirName, dir3, "Module" + i, "content.md"), "Hello");
// }