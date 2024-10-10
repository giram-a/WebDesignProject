const form = document.getElementById("forgotPassForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Please check your email for further instructions.");

  form.reset();
});
