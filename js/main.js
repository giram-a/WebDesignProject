function validateForm() {
  var email = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var emailValid = validateEmail(email);
  var passwordValid = validatePassword(password);

  document.getElementById("errorFieldEmail").textContent = emailValid
    ? ""
    : "Please enter a valid email address";
  document.getElementById("errorFieldPassword").textContent = passwordValid
    ? ""
    : "Password must be at least 8 characters long";

  var loginButton = document.getElementById("loginButton");
  loginButton.disabled = !(emailValid && passwordValid);
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function validatePassword(password) {
  var re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return re.test(password);
}
