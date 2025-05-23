document.addEventListener("DOMContentLoaded", function () {
    const messageDiv = document.querySelector(".message");
    const quizButton = document.querySelector(".btn1");
    const logoutButton = document.querySelector(".logout-btn");
  });
  const user = sessionStorage.getItem("loggedInUser");
console.log("user", user);
if (user) {
  const fullName = JSON.parse(user).fullName;
  const welcomeMessage = `hello ${fullName} `;
  messageDiv.textContent = welcomeMessage;
  messageDiv.style.fontSize = "20px";
  messageDiv.style.fontWeight = "bold";
  messageDiv.style.color = "#7880F6";
  messageDiv.style.textAlign = "center";
  messageDiv.style.marginBottom = "20px";
  quizButton.style.display = "inline-block";
  logoutButton.style.display = "inline-block";
} else {
  quizButton.style.display = "none";
  logoutButton.style.display = "none";
}
logoutButton.addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUser");
    messageDiv.textContent = "";
    quizButton.style.display = "none";
    logoutButton.style.display = "none";
    window.location.href = "../login/login.html";
  });
  
