// Function to generate random color
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// Button click event
document.getElementById("btn").addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});
