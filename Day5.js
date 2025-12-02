const setup = document.getElementById("jokeSetup");
const punchline = document.getElementById("jokePunchline");
const button = document.getElementById("getJoke");

button.addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      setup.innerText = "🟦 " + data.setup;
      punchline.innerText = "🟩 " + data.punchline;
    })
    .catch((err) => {
      setup.innerText = "Error fetching joke 😭";
      punchline.innerText = "";
    });
});
