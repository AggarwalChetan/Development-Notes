// declare
// array is collection of homogeneous datatypes -> Java, C++
// array is a collection of anything

let arr = [1, true, 1.1, "string", null, [1,2,3,4,5]];
// console.log("null", arr[4]);
// console.log("extract 3 from 2dArray", arr[arr.length - 1][3]);
// console.log(arr);

// function definition
function fn(){
    console.log("I am a function");
    return 10;
}

// function invocation
let rVal = fn();
// console.log("rVal", rVal);
// console.log("function", fn);

let tempArr = [1,2,3,4,5];
let temp1Arr = tempArr;

let arr2 = [
    1,
    true,
    1.1,
    "string",
    null,
    temp1Arr,
    fn
];

// console.log(" 2dArray", arr[arr.length - 2]);
// console.log("access the last element", arr2[arr2.length - 1]);
// console.log("call the last element", arr2[arr2.length - 1]());