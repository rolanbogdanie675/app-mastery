/** 
 * Filename: advanced_js_code.js
 * 
 * Content: This code is an advanced JavaScript implementation 
 * that involves a complex data structure and various functions 
 * to manipulate and display the data.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the age of the person
  getAge() {
    return this.age;
  }
}

// Array of persons
const persons = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 30),
  new Person("Bob Johnson", 40),
  new Person("Alice Williams", 35),
];

// Function to filter persons by age
function filterPersonsByAge(minAge, maxAge) {
  return persons.filter(person => person.getAge() >= minAge && person.getAge() <= maxAge);
}

// Function to sort persons by name
function sortPersonsByName() {
  return persons.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to calculate the average age of persons
function calculateAverageAge() {
  const totalAge = persons.reduce((sum, person) => sum + person.getAge(), 0);
  return totalAge / persons.length;
}

// Function to display persons
function displayPersons() {
  console.log("Persons:");
  persons.forEach(person => console.log(`- ${person.name}, ${person.getAge()} years old`));
}

// Usage of functions and data

console.log("Initial list of persons:");
displayPersons();

console.log("\nFiltering persons by age (between 30 and 40):");
const filteredPersons = filterPersonsByAge(30, 40);
filteredPersons.forEach(person => console.log(`- ${person.name}, ${person.getAge()} years old`));

console.log("\nSorting persons by name:");
const sortedPersons = sortPersonsByName();
sortedPersons.forEach(person => console.log(`- ${person.name}, ${person.getAge()} years old`));

console.log("\nCalculating the average age of persons:");
const averageAge = calculateAverageAge();
console.log(`Average age: ${averageAge}`);

console.log("\nUpdated list of persons:");
displayPersons();

// Output:
// Initial list of persons:
// Persons:
// - John Doe, 25 years old
// - Jane Smith, 30 years old
// - Bob Johnson, 40 years old
// - Alice Williams, 35 years old

// Filtering persons by age (between 30 and 40):
// - Jane Smith, 30 years old
// - Bob Johnson, 40 years old
// - Alice Williams, 35 years old

// Sorting persons by name:
// - Alice Williams, 35 years old
// - Bob Johnson, 40 years old
// - Jane Smith, 30 years old
// - John Doe, 25 years old

// Calculating the average age of persons:
// Average age: 32.5

// Updated list of persons:
// Persons:
// - Alice Williams, 35 years old
// - Bob Johnson, 40 years old
// - Jane Smith, 30 years old
// - John Doe, 25 years old