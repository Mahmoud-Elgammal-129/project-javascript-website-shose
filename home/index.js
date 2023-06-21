


const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  if (username === "admin" && password === "password") {
    window.location.href = "../page.html";

  } else {
    errorMessage.textContent = "Invalid username or password";
  }
});