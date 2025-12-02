// Async/Await + Arrow Function + Error Handling

const loadFile = async () => {
  try {
    const response = await fetch("files.json");

    if (!response.ok) {
      throw new Error("Failed to load JSON: " + response.status);
    }

    const data = await response.json();

    const result = data.find(e => e.id === document.getElementById("input1").value)
    if (result) {
        document.getElementById("demo").innerHTML = result.name;
    } else {
    }
    

  } catch (error) {
    document.getElementById("demo").innerHTML = "Error: " + error.message;
  }
};

loadFile();
