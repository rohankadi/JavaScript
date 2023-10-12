//Singleton Object
// const user = new Object();

//non-Singleton Object
const user = {};

user.id = "123abc";
user.name = "Ron";
user.isLoggedIn = false;

//console.log(user);
const dailyUser = {
    email : "ron123@google.com",
    fullname : {
        firstName : "Rohan",
        lastName : "Kadi"
    }
}
 
console.log(dailyUser);
console.log(dailyUser.email);
console.log(dailyUser.fullname);
console.log(dailyUser.fullname.firstName);
console.log(dailyUser.fullname.lastName);

//combining objects
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj3 = {5 : "a", 6 : "b"};

//const obj4 = {obj1, obj2, obj3};
// const obj4 = Object.assign(obj1, obj2, obj3);
//spread operator
const obj4 = {...obj1, ...obj2, ...obj3};
console.log(obj4);