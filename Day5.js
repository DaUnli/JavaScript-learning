// Practice Fetch API

function getPokemon() {
  fetch("config.json")
    .then((res) => res.json())
    .then((data) => console.log(data.name))
    .catch((error) => console.log(error));
}
