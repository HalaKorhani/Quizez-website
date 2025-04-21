document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
    
        const email = emailInput.value.trim();
        const password = passwordInput.value;
    
        if (email === "admin@quiz.com" && password === "admin123") {
          window.location.href = "../dashoard/dashboard.html";
          return;
        }
    