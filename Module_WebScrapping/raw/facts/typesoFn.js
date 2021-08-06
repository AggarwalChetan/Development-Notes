function fn(param){
    console.log("param is ", param);
    console.log("```````````````````````");
}

// value
fn(10);
fn("vfdv");

// reference
fn([1,2,3,4,4]);
fn({name : "abc"});


// for variables
let a = [12,14,42,443];
let b = a;
console.log("b", a);
a.pop();
console.log("b", b);

// function statement
function fn(){
    console.log("I am a fn statement");
}

// In JS, functions are treated as variable 
// variable -> assign value / address
// function address -> variable assign

// function expression
let exp = function(){
    console.log("I am a function expression");
}

// invocation
exp();

// IIFE -> Immediately invoke function expression
(function fn(){
    console.log("I am an IFEE i will called immediately")
})();

// arrow function -> React
let arrowFn = () => {
    console.log("I am arrow function");
}

arrowFn();






