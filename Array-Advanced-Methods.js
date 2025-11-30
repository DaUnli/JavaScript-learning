// Array Advanced Methods

// Practice: map(), filter(), reduce(), find()

// ✔ Activity:
// •	Given an array of numbers, return even numbers, sum of all numbers, and numbers × 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original Numbers:", numbers);

// Use filter() to get the even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// Use reduce() to get the sum of all numbers
const sumOfNumbers = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log("Sum of all numbers:", sumOfNumbers);

// Use map() to get a new array with each number multiplied by 2
const numbersMultipliedByTwo = numbers.map(number => number * 2);
console.log("Numbers multiplied by 2:", numbersMultipliedByTwo);

// --- Bonus: find() ---
// find() returns the first element in the array that satisfies the provided testing function.

const firstNumberGreaterThan5 = numbers.find(number => number == 7);
console.log("First number greater than 5:", firstNumberGreaterThan5);