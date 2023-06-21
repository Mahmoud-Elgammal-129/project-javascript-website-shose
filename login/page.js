
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(emailInput, 'Email is not valid');
  } else {
    setSuccessFor(emailInput);
  }

  if (passwordValue === '') {
    setErrorFor(passwordInput, 'Password cannot be blank');
  } else {
    setSuccessFor(passwordInput);
  }

  if (emailValue !== '' && passwordValue !== '') {
    // Perform login action here
    alert('Login successful!');
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector('.invalid-feedback');
  input.classList.add('is-invalid');
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  input.classList.remove('is-invalid');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}