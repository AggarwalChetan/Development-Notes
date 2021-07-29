let a = 10;

let singleQuotesString = 'I am a single quotes string ' + a;
let doubleQuotesString = "I am a double quotes string " + a;

// advantage -> Multiple Line String create
let templateString = `I am a template string ${a}`;

console.log(singleQuotesString);
console.log(doubleQuotesString);
console.log(templateString);
