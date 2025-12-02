// Practice Fetch API

const list = document.getElementById("pokemon");
const insert = document.getElementById("input1");

function getPokemon() {
  fetch("config.json")
    .then((res) => res.json())
    .then((data) => {
      const result = data.find((e) => e.id === insert.value);
      if (result) {
        list.innerText = data.map((e) => e.name);
      } else {
        list.innerText = "not on the list";
      }
    })
    .catch((error) => console.log(error));
}
