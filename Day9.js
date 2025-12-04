// Simple Calculator (Better Version) -->?
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const sum = document.getElementById("sum");
const equals = document.getElementById("equals");

equals.addEventListener("click", () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  const operation = op.value;

  let result;

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Cannot divide by 0" : a / b;
      break;
    default:
      result = "Invalid operation";
  }

  sum.innerText = "Result: " + result;
});
