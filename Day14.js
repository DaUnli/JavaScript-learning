const USER = "admin";
const PASS = "1234";

// Check login on page load
if (localStorage.getItem("loggedIn" === "true")) {
  showWelcome();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === USER && password === PASS) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    showWelcome();
  } else {
    error.textContent = "Invalid username or password";
  }
}

function showWelcome() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("welcomeBox").style.display = "block";
  document.getElementById("welcome").textContent =
    "Welcome, " + localStorage.getItem("username") + "!";
}

function logout() {
  localStorage.clear();
  location.reload();
}
