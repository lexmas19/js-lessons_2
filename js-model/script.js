const shareBtn = document.querySelector(".share");
const socialsElem = document.querySelector(".socials");

console.log(shareBtn);

shareBtn.addEventListener("click", () => {
  socialsElem.classList.toggle("hidden");
});
