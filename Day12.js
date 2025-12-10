// JSON Practice

const Jsons = async () => {
  try {
    const res = await fetch("files.json");

    if (!res.ok) {
      throw new Error("Failed to load JSON file");
    }

    // Wait for JSON data
    const data = await res.json();
    console.log("Original Data:", data);

    // 2. Convert object to JSON string
    const jsonString = JSON.stringify(data);
    document.getElementById("n1").innerText = "JSON String: " + jsonString;

    // 3. Convert JSON string back to object
    const parsedObject = JSON.parse(jsonString);

    // Display properly using JSON.stringify again
    document.getElementById("n2").innerText =
      "Parsed Object: " + JSON.stringify(parsedObject, null, 2);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

Jsons();
