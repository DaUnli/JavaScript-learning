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
  click.innerText = "loading...";

  const person = people.find((e) => e.id == insert);

  setTimeout(() => {
    if (person) {
      spot1.innerText = person.name;
      spot2.innerText = person.age;
      spot3.innerText = person.id;
    } else {
      spot1.innerText = "not found";
      spot2.innerText = "";
    }

    click.disabled = false;
    click.innerText = "click";
  }, 3000);
});
