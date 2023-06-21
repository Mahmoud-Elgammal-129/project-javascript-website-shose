"use strict"

const close = document.getElementById("close");
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}
"use script";


// let addToCart = document.getElementById("ooo");
let addToCart = document.querySelectorAll(".fa-shopping-cart");
let add = document.querySelector("#valuecart");


addToCart.forEach(element => {
  element.addEventListener("click", () => {
    // Number(add.innerHTML)++;
    let numadd = Number(add.innerHTML) + 1;
    add.innerHTML = numadd;
  });
});