/* //01
function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}

// addTwoNums(3, '4'); //considered as String 34
addTwoNums(3, 4);
*/

/* //02
const result = addTwoNums(3, 5);
console.log("Result : " , result); //get UNDEFINED
*/
/*03
function mulNum(num1, num2) {
    return num1 * num2;
}
const mul = mulNum(2, 5);
console.log("Multiplcation = " + mul);
*/
/* //04
function loginUserMessage(username) {
    // if(username === undefined){
    if (!username) {
        console.log("Please , enter a Username");
        return ;
    }
        return `${username}, just logged in`;
}

// console.log(loginUserMessage());
console.log(loginUserMessage("Rohan"));

//If user doesn't enter any username then it takes 'hitesh' as default username 
function loginUserMessage(username = "hitesh") {
    return `${username}, just logged in`;
}

console.log(loginUserMessage());
console.log(loginUserMessage("Rohan"));
*/

/* //05
//rest operater => stores values in an array 
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500));
*/
/* //06
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500));
 */

/*
//07 creating object
//a
const user = {
    username : "rohan",
    price : 199
}
//b
const user2 = {
    username : "mohan",
    price : 99
}

//****************************Object pass**********************
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
 
handleObject(user);
handleObject(user2);

//c user3
handleObject({
    username : "hitesh",
    price : 399
});
*/

//*****************Array Passing*****************
const myNewArray = [100, 500, 300, 200];
const arr = ["Apple", "Banana", "Cherry", "Mango"];

function getSecondArrayElement(secondElement){
    return secondElement[1];
}

console.log(getSecondArrayElement(myNewArray));
console.log(getSecondArrayElement(arr));

console.log(getSecondArrayElement([200, 300, 500, 600]));

