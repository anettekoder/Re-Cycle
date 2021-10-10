const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const button = document.querySelector(".reset");

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 4) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  console.log("hello,hi");
}

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = '<div class="message">Your message has been sent</div>';

  form.reset();
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
