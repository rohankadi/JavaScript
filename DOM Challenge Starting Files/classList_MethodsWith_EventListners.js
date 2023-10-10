document.querySelector("#header").addEventListener("mouseout", abc);
document.querySelector("#header").addEventListener("click", xyz);

//01 add method
// function abc(){
//     document.querySelector("#header").classList.add("yzx", "cde", "efg");

//     var a = document.querySelector("#header").classList;
//     console.log(a + "   " + a.length);
// }

//02 remove method
// function xyz(){
//     document.querySelector("#header").classList.remove("abc");
//     var x = document.querySelector("#header").classList;
//     console.log(x + "   " + x.length);
// }

//03 toggle method
/*
function xyz(){
    //toggle works as both add and remove   
    document.querySelector("#header").classList.toggle("cde");
    var x = document.querySelector("#header").classList;
    console.log(x + "   " + x.length);
}
*/

//04 item method
/*
function xyz(){
    var a = this.classList.item(2);
    console.log(a);
}
*/

//05 length method
/*
function abc(){
    document.querySelector("#header").classList.add("yzx", "cde", "efg");

    var a = document.querySelector("#header").classList.length;
    console.log(a);
}
*/

//05 contains method
function abc(){
  var a =  document.querySelector("#header").classList.contains("yzx");
    console.log(a);
}