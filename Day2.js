// Array Advanced Methods

// Practice: map(), filter(), reduce(), find()

// ✔ Activity:
// •	Given an array of numbers, return even numbers, sum of all numbers, and numbers × 2
const demo1 = document.getElementById("demo1");
const demo2 = document.getElementById("demo2");
const demo3 = document.getElementById("demo3");
const demo4 = document.getElementById("demo4");
const demo5 = document.getElementById("demo5");

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
``;

demo1.innerText = `Original Numbers: ${numbers}`;

// Use filter() to get the even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
demo2.innerText = `Even Numbers: ${evenNumbers}`;

// Use reduce() to get the sum of all numbers
const sumOfNumbers = evenNumbers.reduce((first, last) => first + last);
demo3.innerText = `Sum of All numbers: ${sumOfNumbers}`;

// Use map() to get a new array with each number multiplied by 2
const numbersMultipliedByTwo = evenNumbers.map((number) => number * 2);
demo4.innerText = `Numbers multiplied by 2: ${numbersMultipliedByTwo}`;

// --- Bonus: find() ---
// find() returns the first element in the array that satisfies the provided testing function.

const firstNumberGreaterThan5 = numbers.find((number) => number == 7);
demo5.innerText = `First number greater than 5: ${firstNumberGreaterThan5}`;
