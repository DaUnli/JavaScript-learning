const insert1 = document.getElementById("merge1");
const insert2 = document.getElementById("merge2");
const insert3 = document.getElementById("merge3");
const insert4 = document.getElementById("merge4");

// Merge Two Arrays
const room1 = [
  { name: "james", age: 13 },
  { name: "ashley", age: 14 },
];

const room2 = [
  { name: "jamess", age: 13 },
  { name: "ashleys", age: 14 },
];

// Merge arrays
const mix = [...room1, ...room2];

// Display (convert to text first)
insert1.innerText = JSON.stringify(mix, null, 2);
 

// Copy an Object
const student = { name: "Gilmier", age: 19 };

const studentCopy = { ...student };
insert2.innerText = JSON.stringify(studentCopy, null, 2);

// Add New Values Without Changing the Original
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];
insert3.innerText = numbers;
insert4.innerText = newNumbers;
