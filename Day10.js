function showList() {
  const names = JSON.parse(localStorage.getItem("names")) || [];
  const list = document.getElementById("nameList");
  list.innerHTML = "";
  names.forEach((name, index) => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

// Show list on page load
window.onload = showList;

// Add a name
document.getElementById("addBtn").onclick = () => {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  if (name === "") return alert("Enter a name!");

  const names = JSON.parse(localStorage.getItem("names")) || [];
  names.push(name);
  localStorage.setItem("names", JSON.stringify(names));

  nameInput.value = "";
  showList();
};

// Clear the list
document.getElementById("clearBtn").onclick = () => {
  localStorage.removeItem("names");
  showList();
};
