const regBtn = document.querySelector(".reg-btn");
const containerElem = document.querySelector(".container");
const closeBtn = document.querySelector(".close-btn");

console.log(closeBtn);

regBtn.addEventListener("click", () => {
  containerElem.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  containerElem.classList.add("hidden");
});
