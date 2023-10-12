//stack(Primitive) we will get a copy, Heap(Non-Primitive)we will get a reference;
let myYoutubeName = "hiCoder";
let anotherName = myYoutubeName;

anotherName = "ChaiAurCode";

console.log(myYoutubeName);
console.log(anotherName);

let personOne = {
    email : "rkrohan@google.com",
    phoneNum : 9876543210
}

let personTwo = personOne;

personTwo.email = "ron@yahoo.com";

console.log(personOne);
console.log(personTwo);