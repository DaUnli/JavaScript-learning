window.onload = () => {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("display").innerText =
      "Saved Username: " + savedName;
    document.getElementById("username").value = savedName;
  }
};

// 2. Save username when clicking the button
document.getElementById("saveBtn").onclick = () => {
  const name = document.getElementById("username").value;
  localStorage.setItem("username", name);
  document.getElementById("display").innerText = "Saved Username: " + name;
};
