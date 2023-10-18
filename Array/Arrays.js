var arr = [10, 20, 30, 40, 50];

//01
// document.write(arr);
// document.write(arr[2]);

//02
/*
document.write("<ul>");
for(var a = 0; a <= arr.length-1; a++){
    document.write("<li>" + arr[a] + "</li>");
}
document.write("</ul>");
*/

//03
var sum = 0;
document.write("<ul>");
for(var a = 0; a <= arr.length-1; a++){
    document.write("<li>" + arr[a] + "</li>");
    sum = sum + arr[a];
}
document.write("</ul>");
document.write("Total Sum : " + sum);