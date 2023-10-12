//*****************DATES*************
/*01
let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
*/


// let myCreatedDate = new Date(2023, 0, 5);   // year, month, date
// let myCreatedDate = new Date(2023, 0, 5, 6, 50); // year, month, date, hr, min
let myCreatedDate = new Date("2022-11-30");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getDay());




/*03
// let myTimeStamp = Date.now(); // Gives date in milliSecond 
let myTimeStamp = Math.floor(Date.now() / 1000); //converting date from millisecond
console.log(myTimeStamp);
*/


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); //Months starts from 0-11

console.log(newDate.toLocaleString('default', {
    weekday : "long"
}))

