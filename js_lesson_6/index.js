// alert("hello js")

// console.log("hello js");

// document.write("hello js");

// confirm("თანახმა ხართ რომ წავშალოთ ექაუნთი?");

let result = "test test";
let age = 23;
let isStudent = true;

console.log(typeof result);
console.log(typeof age);
console.log(typeof isStudent);

// let confirmation = confirm("თანახმა ხართ რომ წავშალოთ ექაუნთი?");
// console.log(confirmation);

// let userName = prompt("ჩაწერეთ თქვენი სახელი");
// console.log(userName);

var surname = "გაბუნია";

surname = "ჭყონია";

console.log(surname);

// const firstName = "აიგული"

// firstName = "მარია"

// +, -, *, /, %, **

console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(11 % 2);
console.log(10 ** 2);

// =
// >, <, >=,<=, ==, ===, !=, !==;

let a = 5;
let b = "5";
console.log(a === b);
console.log(a != b);

if (a > b) {
  console.log("a მეტია b ზე");
} else if (b > a) {
  console.log("b მეტია a ზე");
} else if (a == b) {
  console.log("a და b ერთმანეთს ტოლია");
}

let dayofweek = "ხუთშაბათი";

if (dayofweek == "ორშაბათი") {
  console.log("დღეს არის ორშაბათი");
} else if (dayofweek == "სამშაბათი") {
  console.log("დღეს არის სამშათი");
} else if (dayofweek == "ოთხშაბათი") {
  console.log("დღეს არის ოთხშაბათი");
} else if (dayofweek == "ხუთშაბათი") {
  console.log("დღეს არის ხუთშაბათი");
} else if (dayofweek == "პარასკევი") {
  console.log("დღეს არის პარასკევი");
} else if (dayofweek == "შაბათი") {
  console.log("დღეს არის შაბათი");
} else {
  console.log("დღეს არის კვირა");
}

let day = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
});
console.log(day);

let num = -2;

if (num > 0) {
  console.log("დადებითი");
} else {
  console.log("უარყოფითი");
}

num > 0 ? console.log("დადებითი") : console.log("უარყოფითი");

function greeting() {
  console.log("გამარჯობა");
}

greeting();

function sum(a, b) {
  return a + b;
}

// console.log(sum(12, 8));
let result2 = sum(12, 8);
console.log(result2);

// let multiply = function (a, b) {
//   return a * b;
// };

// let multiply = (a, b) => {
//   return a * b;
// };

let multiply = (a, b) => a * b;

console.log(multiply(2, 4));
