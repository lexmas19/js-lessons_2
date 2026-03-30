const h2elem = document.querySelector("h2");
console.log(h2elem);

const h3elem = document.querySelector("#heading3");
console.log(h3elem);

const h4elem = document.querySelector(".heading4");
console.log(h4elem);

// style change whith javascript

h2elem.style.color = "red";

h3elem.style.backgroundColor = "yellow";

h3elem.style.fontSize = "32px";

// LM text change

h4elem.textContent = "test test test";

console.log(h2elem.textContent);

const paraElems = document.querySelectorAll(".para");
console.log(paraElems);

//
let numbers = [88, 10, 5, 43];
console.log(numbers[1]);
console.log(numbers[0]);

//              0          1         2        3          4          5
let fruits = ["მსხალი", "ვაშლი", "ანანასი", "ჟოლო", "საზამთრო", "ალუჩა"];

console.log(fruits.length - 1);

paraElems.forEach((item) => {
  item.style.color = "green";
});

paraElems[0].classList.add("paraStyles");

const containerElem = document.querySelector(".container");

const btnElem = document.querySelector(".btn");
btnElem.classList.remove("btn");

btnElem.addEventListener("click", () => {
  btnElem.classList.add("styledBtn");
  h2elem.classList.toggle("hidden");
  containerElem.classList.toggle("hidden");
});
