// represent
// empty object create
let obj = {}
// key:value pair
// key -> string, number
// value -> anything
let cap = {
    name : "Steve",
    lastName : "Rogers",
    friends : ["Peter", "Bruce", "Tony"],
    isAvenger : false,
    age : 34,
    sayHi : function () {
        console.log("cap says's Hi");
    },
    address : {
        state : "New York",
        city : "NY City"
    }
}

// print ->
// console.log(cap);
// get 
// . notation
// console.log("name", cap.name);
// console.log("friends", cap.friends[1]);
// console.log("Age", cap.age);

// if not present
// console.log("movies", cap.movies);
// cap.sayHi();

// [] operator
let varName = "address";
// console.log(varName);
console.log("address", cap[varName]);
console.log("address", cap.address);

// loop

// for(let key in cap){
//     // console.log(key, " : ", cap[key]);
// }

// new key add
console.log(add);
cap.movies=["first Aveneger", "civil War"];
//update
cap.age = 45;
// delete 
delete cap.address.city;

//console.log(cap);

