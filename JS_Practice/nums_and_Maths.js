/*
const score = 400;
console.log(typeof(score) + " " + score);

var balance = new Number(500);
console.log(typeof(balance) + " " + balance);

console.log(typeof(balance.toString()) +" "+ balance.toString());
console.log(typeof(balance.toFixed(2)) +" "+ balance.toFixed(2));

let anotherNumber = 123.576;
console.log(anotherNumber.toPrecision(4));

let hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// Number.EPSILON
// 2.220446049250313e-16

// Number.isFinite
// ƒ isFinite() { [true or  false] }

// Number.isInteger
// ƒ isInteger() { [true or  false] }

// Number.MAX_VALUE
// 1.7976931348623157e+308

// Number.MAX_SAFE_INTEGER
// 9007199254740991

// Number.MIN_SAFE_INTEGER
// -9007199254740991

// Number.MIN_VALUE
// 5e-324

// Number.POSITIVE_INFINITY
// Infinity

*/

//************** 02 Maths ****************
// console.log(Math);  
// console.log(Math.abs(-6)); //always gives a positive Value
// console.log(Math.round(5.3)); //always gives a round figure Value
// console.log(Math.ceil(5.3)); //always gives a upward round figure Value
// console.log(Math.floor(5.3)); //always gives a downward round figure Value
// console.log(Math.max(5, 1, 8, 2));
// console.log(Math.min(5, 1, 6, 2));

// console.log(Math.random()); //gives an random value between 0-0.99999
// console.log(Math.floor(Math.random() * 10) + 1); //gives an random value between 1-9.9999

let min = 10;
let max = 20;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

