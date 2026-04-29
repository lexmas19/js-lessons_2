const registerForm = document.querySelector("form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const name = document.querySelector("#first-name");
  const surname = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  const general = document.querySelector("#general");
  const support = document.querySelector("#support");
  const message = document.querySelector("#text");
  const consent = document.querySelector("#consent");

  if (!name.value) {
    let message = "This field is required";
    name.classList.add("red-border");
    name.previousElementSibling.classList.remove("hidden");
    name.removeAttribute("placeholder");
    name.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    name.classList.remove("red-border");
    name.nextElementSibling.textContent = "";
    isValid = true;
  }

  if (!surname.value) {
    let message = "This field is required";
    surname.classList.add("red-border");
    surname.previousElementSibling.classList.remove("hidden");
    surname.removeAttribute("placeholder");
    surname.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    surname.classList.remove("red-border");
    surname.nextElementSibling.textContent = "";
    isValid = true;
  }

  if (!email.value) {
    let message = "Please enter a valid email address";
    email.classList.add("red-border");
    email.previousElementSibling.classList.remove("hidden");
    email.removeAttribute("placeholder");
    email.nextElementSibling.textContent = message;
    isValid = false;
  } else if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == null) {
    email.value = "";
    let message = "Looks like this is not an email";
    email.classList.add("red-border");
    email.previousElementSibling.classList.remove("hidden");
    email.setAttribute("placeholder", "email@example/com");
    email.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    email.classList.remove("red-border");
    email.nextElementSibling.textContent = "";
    isValid = true;
  }
});
