// Create a Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // speak method
  speak() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create 3 objects
const person1 = new Person("John", 20);
const person2 = new Person("Maria", 22);
const person3 = new Person("Alex", 19);

// Call the speak method
person1.speak();
person2.speak();
person3.speak();
