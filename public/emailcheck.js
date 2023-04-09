const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const formInputs = document.querySelectorAll(".form-control");

emailInput.addEventListener("input", () => {
  if (!emailInput.checkValidity()) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
  }
});

emailInput.addEventListener("blur", () => {
  if (!emailInput.checkValidity()) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
  }
});

emailInput.addEventListener("focus", () => {
  emailInput.classList.remove("is-invalid");
});

formInputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.classList.remove("is-invalid");
        input.nextElementSibling.classList.add("d-none");
    });
});