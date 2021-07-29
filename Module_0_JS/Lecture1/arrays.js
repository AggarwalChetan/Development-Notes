// Array declaration
let arr = [1,3,5,6,7];
// console.log(arr);

// loops
for(let i = 0; i < arr.length; ++ i){
    // console.log(i + ":" + arr[i]);
    // console.log(i, ":", arr[i]);
}

// 2D array
let arr2 = [[1,3,4],[3,4,5]];
// console.log(arr);

let arr3 = [1,2,3,4,5,6];

// push pop -> add / remove Last
// console.log(arr3);
arr3.pop();
// console.log(arr3);
arr3.push(18);
// console.log(arr3);

// unshift shift -> add / remove First
arr3.shift(); // remove first
// console.log(arr3);
arr.unshift(15); // add first
// console.log(arr3);

let arr4 = [1,2,3,4,5,6];
// slice -> gives copy of a subarray 
// starting index, endingIndex - 1
arr4 = arr4.slice(1,4);
// console.log(arr4);

let arr5 = [1,2,3,4,5,6];
// splice -> deletes any number of elements
// also modify the original array
arr5 = arr5.splice(2, 2);
console.log(arr5);

// indexOf -> index for an element in an array
// if not present return -1
let idx = arr5.indexOf(4);
// console.log(idx);

// includes -> it check if an element is inside an array
// return true or false
let present = arr5.includes(332);
// console.log(present);


// to check the type of any variable
console.log(typeof present);


