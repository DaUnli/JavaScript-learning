// Async/Await + Arrow Function + Error Handling

const insert = document.getElementById("input1");
const demo = document.getElementById("demo");
const images = document.getElementById("images");

const Pokemon = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${insert.value}`
    );

    if (!res.ok) {
      throw new Error("Not Found this: " + error.message);
    }

    const data = await res.json();
    demo.innerText = data.age;
    console.log(data.abilities)

    images.src = data.sprites.front_default;
    images.style.display = "block";
    images.style.justifyContent = "center";
  } catch (error) {
    demo.innerText = "Error " + error.message;
  }
};
