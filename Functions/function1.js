let a = 5;
let b = 6;
let c = 7;

function myfunction(x, y){
//return 1+(x+y)/2
 return Math.round(1 + (x+y)/2)  //removes a decimal digit
}

console.log(myfunction(a,b));
console.log(myfunction(b,c));
console.log(myfunction(c,a));