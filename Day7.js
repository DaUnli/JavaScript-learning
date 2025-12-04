// DOM Manipulation

const select = document.getElementById("select");

// Function to generate random name
const randomName = async () => {
  try {
    const res = await fetch("files.json");

    if (!res.ok) {
      throw new Error("Failed to load JSON");
    }

    const data = await res.json();

    const listName = data.map(item => item.name);

    const randomIndex = Math.floor(Math.random() * listName.length);

    return listName[randomIndex];

  } catch (error) {
    return "Error: " + error.message;
  }
};

// Button click event
document.getElementById("btn").addEventListener("click", async () => {
  select.innerText = await randomName();
});
