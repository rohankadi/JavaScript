let a = [20, 10, 13, 15, 8, 7];
/*
a[2] = 5;
console.log(a) 
console.log(typeof(a))

let b = a.toString()
console.log(b) 
console.log(typeof(b))
*/

/*
let c = a.shift()
console.log(c);
console.log(a);  //removes the first item of an array
a.unshift(6); // adds to the   first item of an array
console.log(a)
*/

/*
 let d = [1,2,3,4,5,6,7,8,9]
 console.log(typeof(d))
 console.log(d.length)
 console.log(d)
 
 delete d[0]
 console.log(d)
 console.log(d.length);
*/

//  console.log(a.includes(2)); //returns false


/*
//05
const newArr = a.join(); //join() returns an array as a string. or Adds all the elements of an array into a string, separated by the specified separator string.
console.log(a);
console.log(newArr);
*/

//06
const fruits = ["Banana", "Orange", "Apple", "Mango", "Cherry"];

//a. The at() method returns an indexed element from an array
// console.log(fruits.at(1));
// //b. indexOf() returns the position of a specified value in an array
// console.log(fruits.indexOf("Orange"));
// //c. The concat() method concatenates (joins) two or more arrays
// console.log(a.concat(fruits));

// //d. Array.sort()
// console.log(fruits.sort());
// //e. Array.reverse()
// console.log(fruits.reverse());

//f Array.push() methods adds the element at starting position
fruits.push("Strawberry");
console.log(fruits);
//g Array.pop() methods remove the element at last position
fruits.pop();
console.log(fruits);


//h.Array.slice() returns selected array elements as a new array
// console.log(fruits.slice(1,3)); //3-exclusive
// console.log("A : " + fruits);

// //i.The Array.splice() method overawrite an original array elements
// console.log(fruits.splice(1,3)); //3-inclusive
// console.log("B :" + fruits);

// // j.The copyWithin() copies array elements to another position in an array, overwriting existing values
// console.log(fruits.copyWithin(2,0)); //2nd index element is overwriting/changing with 0th index 