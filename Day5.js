// Practice Fetch API

const list = document.getElementById("pokemon");
const insert = document.getElementById("input1");

function getPokemon() {
  fetch("files.json")
    .then((res) => res.json())
    .then((data) => { 
      const result = data.find((e) => e.id === insert.value);
      if (result) {
        list.innerText = `${result.name}, ${result.age}, ${result.city},  ${result.money}`
      } else {
        list.innerText = "not on the list";
      }
    })
    .catch((error) => console.log(error));
}
