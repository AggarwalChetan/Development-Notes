// console.log is used to print anything
console.log("Hello Everyone");

// variables
// default value -> undefined
let a;
// primitive types: undefined, numbers, string, boolean, null
console.log("a", a);
// numbers
a = 5;
console.log("a", a);
a = 2.2;
console.log("a", a);
a = 5 / 2;
console.log("a", a);

// null
a = null;
console.log("a", a);

// string
a = "Hello World with double quotes";
console.log("a", a);
a = 'Hello World with single quotes';
console.log("a", a);
a = `Hello World with backtick`;
console.log("a", a);

// boolean
a = true;
console.log("a", a);

//if else, while, for 
for(let i = 1; i <= 10; ++ i){
    console.log("Number is ", i);
}

// to print
// multiple lines
// System.out.println() -> console.log();
// single line
// System.out.print() -> process.stdout.write()

// you will always get input in the form of string

// input type cohersion
// comparison, arithmetic -> (>, = , <), * /, => string will be converted into number
let input = "10";
let b = 10;
console.log(input < 4);
// concantenation -> string + number -> string
console.log("Hello i am something" + 10);
console.log("Hello i am something", 10);

let ans = Number(input) + b;
console.log(ans);







