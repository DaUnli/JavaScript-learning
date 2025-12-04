// Event Listeners
textbox.addEventListener("input", () => {
  const textbox = document.getElementById("textbox").value;
  const display = document.getElementById("display");
  display.innerText = textbox;
});
