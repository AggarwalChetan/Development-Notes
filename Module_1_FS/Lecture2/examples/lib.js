// variables
// functions

let a = 10;

function fun(){
    console.log("Function Exported");
    return "Successful";
}

function fun2(){
    console.log("Function not Exported");
    return "Failed";
}

module.exports = {
    a : a,
    fun : fun
}