let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let password = document.getElementById("password");

nameInput.addEventListener("keyup", validateName);

function validateName() {
  if (nameInput.value.length < 5) {
    nameInput.classList.add("is-invalid");
  } else {
    nameInput.classList.remove("is-invalid");
  }
}

emailInput.addEventListener("keyup", validateEmail);

const regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;

function validateEmail() {
  if (!regExEmail.test(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
  }
}

passwordInput.addEventListener("input", function () {
  var password = this.value;
  var conditionsList = document.getElementById("password-conditions");

  // Show conditions when typing starts
  if (password.length > 0) {
    conditionsList.style.display = "block";
  } else {
    conditionsList.style.display = "none"; // Hide conditions if field is empty
  }

  var isLengthValid = password.length >= 8;
  var isUppercaseValid = /[A-Z]/.test(password);
  var isLowercaseValid = /[a-z]/.test(password);
  var isNumberValid = /\d/.test(password);
  var isSpecialCharValid = /[!@#$%^&*]/.test(password);

  // Length condition
  if (isLengthValid) {
    document
      .getElementById("length-condition")
      .classList.remove("invalid-condition");
    document
      .getElementById("length-condition")
      .classList.add("valid-condition");
  } else {
    document
      .getElementById("length-condition")
      .classList.remove("valid-condition");
    document
      .getElementById("length-condition")
      .classList.add("invalid-condition");
    passwordInput.classList.add("is-invalid");
  }

  // Uppercase condition
  if (isUppercaseValid) {
    document
      .getElementById("uppercase-condition")
      .classList.remove("invalid-condition");
    document
      .getElementById("uppercase-condition")
      .classList.add("valid-condition");
  } else {
    document
      .getElementById("uppercase-condition")
      .classList.remove("valid-condition");
    document
      .getElementById("uppercase-condition")
      .classList.add("invalid-condition");
    passwordInput.classList.add("is-invalid");
  }

  // Lowercase condition
  if (isLowercaseValid) {
    document
      .getElementById("lowercase-condition")
      .classList.remove("invalid-condition");
    document
      .getElementById("lowercase-condition")
      .classList.add("valid-condition");
  } else {
    document
      .getElementById("lowercase-condition")
      .classList.remove("valid-condition");
    document
      .getElementById("lowercase-condition")
      .classList.add("invalid-condition");
    passwordInput.classList.add("is-invalid");
  }

  // Number condition
  if (isNumberValid) {
    document
      .getElementById("number-condition")
      .classList.remove("invalid-condition");
    document
      .getElementById("number-condition")
      .classList.add("valid-condition");
  } else {
    document
      .getElementById("number-condition")
      .classList.remove("valid-condition");
    document
      .getElementById("number-condition")
      .classList.add("invalid-condition");
    passwordInput.classList.add("is-invalid");
  }

  // Special character condition
  if (isSpecialCharValid) {
    document
      .getElementById("special-condition")
      .classList.remove("invalid-condition");
    document
      .getElementById("special-condition")
      .classList.add("valid-condition");
  } else {
    document
      .getElementById("special-condition")
      .classList.remove("valid-condition");
    document
      .getElementById("special-condition")
      .classList.add("invalid-condition");
    passwordInput.classList.add("is-invalid");
  }

  // Hide the conditions list if all conditions are valid
  if (
    isLengthValid &&
    isUppercaseValid &&
    isLowercaseValid &&
    isNumberValid &&
    isSpecialCharValid
  ) {
    conditionsList.style.display = "none";
    passwordInput.classList.remove("is-invalid");
  }
});

let submit = document.getElementById("submit");
let conditions = document.getElementById("terms");
submit.disabled = true;
conditions.addEventListener("change", function () {
  if (conditions.checked) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

let confirmPasswordInput = document.getElementById("confirmPassword");

confirmPasswordInput.addEventListener("keyup", function () {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.classList.add("is-invalid");
  } else {
    confirmPasswordInput.classList.remove("is-invalid");
  }
});
