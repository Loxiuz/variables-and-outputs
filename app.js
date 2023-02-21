"use strict";

window.addEventListener("load", start);

let number = 0;

function start() {
  console.log("start");
  document.querySelector("#btn-increment").addEventListener("click", increment);
  document.querySelector("#btn-decrement").addEventListener("click", decrement);
}
function increment() {
  console.log("increment");
  number++;
  displayNumber();
}
function decrement() {
  console.log("decrement");
  number--;
  displayNumber();
}
function displayNumber() {
  document.querySelector("#number").textContent = number;
}
