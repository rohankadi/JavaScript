//01
/*
document.querySelector("#header").onclick = c;

function c(){
    document.querySelector("#header").style.background = "green";
}
*/

//02
document.querySelector("#header").addEventListener("mouseover", function(){
   // document.querySelector("#header").style.background = "green";
   this.style.background = "green";
})

//03

document.querySelector("#header").addEventListener("mouseout", xyz);
function xyz(){
    document.querySelector("#header").style.border = "10px solid blue";
}

//04 with removeEventListener
// document.querySelector("#header").removeEventListener("mouseout", xyz);
//document.querySelector("#header").removeEventListener("mouseover", c);
