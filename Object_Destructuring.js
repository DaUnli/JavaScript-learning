const spot1 = document.getElementById("spot1");
const spot2 = document.getElementById("spot2");
const spot3 = document.getElementById("spot3");
const inputBox = document.getElementById("inputs");
const click = document.getElementById("click");

const people = [
  { name: "gilmier", age: 19, id: 2025 },
  { name: "james", age: 20, id: 2024 },
];

click.addEventListener("click", () => {
  const insert = inputBox.value;

  click.disabled = true;
  click.innerText = "Loading.....";

  const person = people.find(p => p.id == insert);

  setTimeout(() => {
    if (person) {
      const { name, age } = person;
      spot2.innerText = name;
      spot3.innerText = age;
    } else {
      spot1.innerText = "Not Found";
    }
    click.disabled = false;
    click.innerText = "Submit";
  }, 1000);
});
