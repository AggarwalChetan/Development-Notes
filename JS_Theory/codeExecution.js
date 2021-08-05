// No main 
// js code -> environment
// js -> browser, nodeJs
// environment -> code + global + this
// node -> global
// browser -> window object
// global area -> it is not inside any function

// object given by env
// console.log(global);

// Initially this prints empty object
// console.log(this);

//Execution Context -> code + Environment(global) + JS(this)
// Every code inside Js run in an EC
// There are 2 phases inside an EC
// 1. Creation phase
    // memory allocate
        // variables -> undefined
        // function -> memory allocate

// 2. Code Execution
    // left to right and top to bottom execution

console.log("line number", a);
console.log("line number", b);
var a;
var b;
a = 10;
b = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
fn();
function fn(){
    var p = 10;
    console.log("Thank You for calling Me", p);
}
    
fn();

