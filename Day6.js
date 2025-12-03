// Async/Await + Arrow Function + Error Handling

const loadFile = async () => {
  try {
    const inputvalue = document.getElementById("input1").value;
    const images = document.getElementById("images");
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputvalue}`
    );

    if (!response.ok) {
      throw new Error("Failed to load JSON: " + response.status);
    }

    const data = await response.json();
    document.getElementById("demo").innerHTML = data.name;

    const imagesOf = data.sprites.front_default;

    images.src = imagesOf;
    images.style.display = "block";
  } catch (error) {
    document.getElementById("demo").innerHTML = "Error: " + error.message;
  }
};

