// Convert 5 normal functions → arrow functions

const input1 = document.getElementById("input21");
const demo = document.getElementById("demo");
const submit = document.getElementById("submit");

// submit.addEventListener("change", () => {
//   const valuus = input1.value;
//   demo.innerText = valuus;
// });


submit.addEventListener("click", () => {
  const valuus = input1.value;
  demo.innerText = (valuus < 18 ? "Minor" : "Adult");
});


// const bone = (name) => {
//   return name;
// };
// console.log(bone(userName));
