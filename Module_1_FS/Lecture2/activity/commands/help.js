
function fn(props){
    console.log("List of all commands");
    console.log("1. node main.js tree " + props);
    console.log("2. node main.js organize " + props)
    console.log("3. node main.js help")
}

module.exports = {
    fn : fn
}