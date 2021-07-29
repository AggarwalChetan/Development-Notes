let a = 10;

let singleQuotesString = 'I am a single quotes string ' + a;
console.log(singleQuotesString);

let doubleQuotesString = "I am a double quotes string " + a;
console.log(doubleQuotesString);

// advantage -> Multiple Line String create
let templateString = `I am a template string ${a}`;
console.log(templateString);

// Length of String
let length = templateString.length;
console.log(length);

// substring
let substr = templateString.substring(2, 4);
console.log(substr);

// charAt
let newChar = templateString.charAt(10);
console.log(newChar);

// to upper Case, lower case
console.log(newChar.toUpperCase());
console.log(newChar.toLowerCase());

// slice and substring are same
let subslice = templateString.slice(2, 5);
console.log(subslice);

// Return array of substring, i.e. split string into array on the basis of delimeter
let arrString = templateString.split("a");
console.log(arrString);

// join on the basis of delimeter
let outputString = arrString.join("$");
console.log(outputString);
