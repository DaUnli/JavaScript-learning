const usersDiv = document.getElementById("users");

const Usures = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(error.message);
    }

    const data = await res.json();

    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
      usersDiv.appendChild(userDiv); 
    });
  } catch (error) {
    console.log(message.error);
  }
};

Usures();
