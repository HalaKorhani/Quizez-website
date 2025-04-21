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
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const fullName = fullNameInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const gender = genderMale.checked ? "Male" : genderFemale.checked ? "Female" : "";
  });
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!fullName || !username || !email || !phone || !password || !gender) {
    alert("Please fill in all fields.");
    return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const emailExists = users.some((user) => user.email === email);
  if (emailExists) {
    alert("Email is already registered.");
    return;
  }
  const newUser = {
    fullName,
    username,
    email,
    phone,
    password,
    gender,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

