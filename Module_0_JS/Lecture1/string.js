// strings
let a = 10;

let str = "Hello I am a \nstring " + a;
// console.log(str);

let str2 = 'Hello I am also a \nstring ' + a;
// console.log(str2);

// template string it is enclosed inside backtick
let str3 = `Hello_I_am a template string ${a}`;
// console.log("Actual str: " + str3);

let charAt4 = str.charAt(4);
// console.log("char At 4", charAt4);

// starting index, ending - 1
let slicedStr = str.slice(4, 10);
// console.log("sliced ", slicedStr);

// string -> array of string on the basis of delimeter
let ArrayStr = str.split("a");
//console.log("Array of String", ArrayStr);

// get length
let length = str.length
// console.log(length);

let str4 = "  Hello How are you   ";
let trimmedStr = str4.trim();
// console.log(trimmedStr);

let arrString = trimmedStr.split(" ");
// console.log("arr String", arrString);

// array of string -> string on the basis of delimeter
let ans = arrString.join("+");
// console.log(ans);

// to upper case
let str5 = "i am a boy"
// console.log(str5.toUpperCase())
// similar for characters

// convert string to number
let strN = "13435";
let nb = Number(strN);
// console.log(nb % 2 == 0);