const mail = document.getElementById("emailInput");
const pass = document.getElementById("passInput");
const submit = document.getElementById("submit");
const message = document.getElementById("message");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const email = mail.value.trim();
  const password = pass.value.trim();

  if (email === "" || password === "") {
    message.textContent = "Fields can't be empty";
    message.style.color = "red";
    return;
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    message.textContent = "Invalid email address";
    message.style.color = "red";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters";
    message.style.color = "red";
    return;
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  message.textContent = "Login successful";
  message.style.color = "green";
  
});
