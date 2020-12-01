

let r1 = document.querySelector("ul");
let r2 = document.getElementsByTagName("li");

r1.style.listStyleType = "circle";

let i = 0;
while (i < r2.length){

    r2.item(i).innerHTML = "blablabla";
    i++;
}