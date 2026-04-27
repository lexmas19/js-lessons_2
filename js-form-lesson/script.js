const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  const name = document.querySelector("#firstName");
  const surname = document.querySelector("#lastName");
  const password = document.querySelector("#password");

  const email = document.querySelector("#email");

  if (!name.value) {
    let message = "please enter a name";
    name.nextElementSibling.textContent = message;
    name.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else if (name.value.length < 2) {
    let message = "minimum lenght is 2";
    name.nextElementSibling.textContent = message;
    name.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else {
    name.nextElementSibling.classList.add("hidden");
  }

  if (!surname.value) {
    let message = "please enter a surname";
    surname.nextElementSibling.textContent = message;
    surname.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else if (surname.value.length < 2) {
    let message = "minimum lenght is 2";
    surname.nextElementSibling.textContent = message;
    surname.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else {
    surname.nextElementSibling.classList.add("hidden");
  }

  if (!email.value) {
    let message = "please enter a email";
    email.nextElementSibling.textContent = message;
    email.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == null) {
    let message = "please enter a valid email";
    email.nextElementSibling.textContent = message;
    email.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else {
    email.nextElementSibling.classList.add("hidden");
  }

  if (!password.value) {
    let message = "please enter a password";
    password.nextElementSibling.textContent = message;
    password.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else if (password.value.length < 8) {
    let message = "please enter full password";
    password.nextElementSibling.textContent = message;
    password.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else if (password.value.match(/(?=.*[A-Z])/) === null) {
    let message = "please enter full password";
    password.nextElementSibling.textContent = message;
    password.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else if (password.value.match(/[0-9]/) === null) {
    let message = "please enter full password";
    password.nextElementSibling.textContent = message;
    password.nextElementSibling.classList.remove("hidden");
    isValid = false;
  } else {
    password.nextElementSibling.classList.add("hidden");
  }
  if (isValid) {
    console.log(name.value);
    console.log(surname.value);
    console.log(email.value);
    console.log(password.value);

    name.value = "";
    surname.value = "";
    email.value = "";
    password.value = "";
  }
});
