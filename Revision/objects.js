// represent
// key -> string, number
// values -> valid type
// object -> key : value pair
// object create
// No order

let obj = {};

let cap = {
    // properties
    "name" : "Steve",
    "last Name" : "Rogers",
    "friends" : ["Peter", "Bruce", "Tony"],
    isAvenger : false,
    age : 34,
    address : {
        state : "New York",
        city : "NY City"
    },
    isAvenger : true,
    // methods
    sayHi : function () {
        console.log("cap say's Hi");
    },
    10 : "My value is 10"   
}


// print 
console.log(cap);

// access
console.log("firstName", cap.name);
console.log("friends", cap.friends[1]);
console.log("city", cap.address.city);


// method call
cap.sayHi();

// access way -> [] operator
// whenever
// 1. we have to access the key that has space in it
// 2. key is of type number
console.log("last Name", cap["last Name"]);
console.log("10 value", cap[10]);


// use case
// square bracket -> variable
// variable value -> get -> matching
let varName = 10;
console.log("value is", cap[varName]);
varName = "address";
console.log("value is ", cap[varName]);


// loop over an object
for(let key in cap){
    console.log(key, ":", cap[key]);
}





