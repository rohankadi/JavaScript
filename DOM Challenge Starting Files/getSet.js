var element;
//01 returns inner text without tags
//element = document.getElementById("header").innerText;  
//element = document.getElementById("content").innerText;

//02 returns inner text with tags
//element = document.getElementById("content").innerHTML;
//element = document.getElementById("header").innerHTML;

//03 returns an attribute of class (ie. abc)
//element = document.getElementById("header").getAttribute("class");

//element = document.getElementById("header").getAttribute("style");

//element = document.getElementById("header").getAttribute("onClick");

//element = document.getElementById("header").getAttributeNode("onClick");

//element = document.getElementById("header").getAttributeNode("style");

//element = document.getElementById("header").getAttributeNode("style").value;

//element = document.getElementById("header").attributes;

// element = document.getElementById("header").attributes[1];

// element = document.getElementById("header").attributes[2].name;

//element = document.getElementById("header").attributes[1].value;

/* DOM Set Method */

//document.getElementById("header").innerHTML = "<h1>WOW</h1>";

//element = document.getElementById("header").setAttribute("style","border:10px dotted yellow");

//element = document.getElementById("header").attributes[1].value = "xyz";

// element = document.getElementById("header").removeAttribute("style");

// element = document.getElementById("header").removeAttribute("class");

// console.log(element);