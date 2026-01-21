const stepOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

stepOne
  .then((result) => {
    console.log("Step:", result); // 1
    return result + 1;
  })
  .then((result) => {
    console.log("Step:", result); // 2
    return result + 1;
  })
  .then((result) => {
    console.log("Step:", result); // 3
  })
  .catch((error) => {
    console.log("Error:", error);
  });
