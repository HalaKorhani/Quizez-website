document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("form");
  });
  const fullNameInput = registerForm.querySelector(
    'input[placeholder="Enter your name"]'
  );
  const usernameInput = registerForm.querySelector(
    'input[placeholder="Enter your username"]'
  );
  const emailInput = registerForm.querySelector(
    'input[placeholder="Enter your email"]'
  );
  const phoneInput = registerForm.querySelector(
    'input[placeholder="Enter your phone number"]'
  );
  const passwordInput = registerForm.querySelector(
    'input[placeholder="Enter your password"]'
  );
  const confirmPasswordInput = registerForm.querySelector(
    'input[placeholder="Confirm your password"]'
  );
  const genderMale = document.getElementById("dot-1");
  const genderFemale = document.getElementById("dot-2");
