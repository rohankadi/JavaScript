let marvel_heros = ["Thor", "IronMan", "SpiderMan"];
let dc_heros = ["SuperMan", "Flash", "Batman"];

//01
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

//02
let newHeros = marvel_heros.concat(dc_heros); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(newHeros);

//03 spread method
let allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros); 

//04
const anotherArray = [1,2,3, [4, 5, 6], 7,[6, 7, [4, 5]]];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

//05
console.log(Array.isArray("Rohan"));   //false

//06
console.log(Array.from("Rohan")); //convert string to an array

//07
let score1 = 100;
let score2 = 200;
let score3 = 300;
 
console.log(Array.of(score1, score2, score3)); // works same as (from)