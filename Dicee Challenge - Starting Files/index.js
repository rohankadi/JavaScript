// 01
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);

var randomDiceImage = "dice"+ randomNumber1 + ".png"; //dice-1 to dice-6
// console.log(randomDiceImage)

var randomImageSource = "images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// 02
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerText = "🚩Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerText = "🚩Player 2 Wins!";
}else{
    document.querySelector(".container h1").innerText = "Draw!";
}