// return -> undefined

// function definition
function fn(a, b){
    console.log("Hello a", a);
    console.log("Hello b", b);
    return 10;
}

// invoke -> call
let rVal = fn(10, 20);
console.log("rVal", rVal);

let rVal2 = fn("Helllo", "Hiii");
console.log("rVal2", rVal2);