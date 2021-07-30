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