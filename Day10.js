const nput = document.getElementById("username");
const btn = document.getElementById("saveBtn");
const display = document.getElementById("display");

btn.addEventListener("click", () => {
  const input = nput.value;

  localStorage.setItem("name", input);

  display.innerHTML = localStorage.getItem("name");
});
