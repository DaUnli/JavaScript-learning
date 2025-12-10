const SaveName = () => {
  const savedName = localStorage.getItem("uername");
  if (savedName) {
    document.getElementById("display").innerText =
      "Saved Username: " + savedName;
    document.getElementById("username").value = savedName;
  }
};

window.onload = SaveName();

// 2. Save username when clicking the button
document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value;
  localStorage.setItem("username", name);
  document.getElementById("display").innerText = "Saved Username: " + name;
});
