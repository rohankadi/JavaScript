//singleton ==> Object.create //constructer creates a singleton

const mySym = Symbol("Key1");

//Object literals
const jsUser = {
    name : "Rohan",
    "full Name" : "Rohan Kadi",
    email : "rohan123@google.com",
    isLoggedin : false,
    // mySym : "myKey"
    [mySym] : "mykey"  //o/p ==>  [Symbol(Key1)]: 'mykey' converted to symbol
}


// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser["full Name"]);
// // console.log(typeof jsUser.mySym); //type is string not symbol 
// console.log(typeof jsUser[mySym]); //type is string not symbol 

// //values overwriting
// jsUser.isLoggedin = "true";
// console.log(jsUser);

// //we can freeze the overwriting access
// Object.freeze(jsUser);
// jsUser.email = "ron1@yahoo.com"; //now, object freezed so, not possible to overWrite
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JsUser");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
