const insert1 = document.getElementById("merge1");
const insert2 = document.getElementById("merge2");
const insert3 = document.getElementById("merge3");
const insert4 = document.getElementById("merge4");

// Merge Two Arrays
const room1 = ["james", " trones"];

const room2 = [" undertaker", " kolots"];

// Merge arrays
const mix = [...room1, ...room2];

// Display (convert to text first)
insert1.innerText = `${mix}`;

// Copy an Object
const student = { name: "Gilmier", age: 19 };

const studentCopy = { ...student };
insert2.innerText = JSON.stringify(studentCopy, null, 2);

// Add New Values Without Changing the Original
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = [numbers.find((e) => e == 7), 11, 12];
insert3.innerText = numbers;
insert4.innerText = newNumbers.reduce((f, l) => f + l);
