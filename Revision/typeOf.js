// type of
let a = 10;

// number
console.log(typeof a);

a = "vfdelbmkdgbm ";

// string
console.log(typeof a);

a = true;

// boolean
console.log(typeof a);

a = null;

// null
console.log(typeof a);

// input -> manage
// JSON.parse() is used to convert array in form of string i.e. "[1,4,5,6]" to array
let str = "[1,2,5,5,3]";
console.log(str, typeof str);
let arr = JSON.parse(str);
console.log(arr, Array.isArray(arr)); 
