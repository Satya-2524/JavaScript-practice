// Here are some examples of array methods and object methods in JavaScript:

// Array Methods

// 1. forEach()
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));
// Outputs:
// apple
// banana
// orange

// 2. map()
const number = [1, 2, 3];
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Outputs: [2, 4, 6]

// 3. filter()
// Creates a new array with elements that pass a test.
const even = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Outputs: [2, 4]


// 5. find()
const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // Outputs: 2


//  Object Methods
// 1. Object.keys()

const person = { name: "John", age: 30 };
let keys = Object.keys(person);
console.log(keys); // Outputs: ["name", "age"]


// 2. Object.values()

const persons= { name: "John", age: 30 };
const values = Object.values(person);
console.log(values); // Outputs: ["John", 30]



