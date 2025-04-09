// === 📘 LOOP TYPES EXPLAINED – for...of & for...in ===

/*
📌 for...of
✔️ Loops over values of iterables (arrays, strings, sets, etc.)
✔️ Great for reading values directly
*/

const exampleArray = ["red", "green", "blue"];
for (const color of exampleArray) {
  console.log(color); // red, green, blue
}

const exampleString = "JS";
for (const char of exampleString) {
  console.log(char); // J, S
}

/*
📌 for...in
✔️ Loops over keys (property names) of objects
✔️ Use object[key] to get values
*/

const exampleObject = { brand: "Toyota", year: 2020 };
for (const key in exampleObject) {
  console.log(`${key}: ${exampleObject[key]}`); // brand: Toyota, year: 2020
}

// === 🟢 BEGINNER TASKS – for...of / for...in ===

/* 1. Print each item in an array */
// Method: for...of
const fruits = ["apple", "banana", "cherry"];

/* 2. Print each character in a string */
// Method: for...of
const word = "hello";

/* 3. Print each key in an object */
// Method: for...in
const user = { name: "Tom", age: 30 };

/* 4. Print each value in an object */
// Method: for...in
const car = { brand: "Toyota", year: 2020 };

/* 5. Loop over array and print squares */
// Method: for...of
const nums = [1, 2, 3, 4];

/* 6. Count properties in an object */
// Method: for...in
const settings = { darkMode: true, layout: "grid", font: "Arial" };

/* 7. Copy array elements to a new array */
// Method: for...of
const letters = ["a", "b", "c"];
const copy = [];

/* 8. Print "key: value" from object */
// Method: for...in
const animal = { type: "dog", legs: 4 };

/* 9. Print all vowels from a string */
// Method: for...of
const text = "javascript";

/* 10. Print all even numbers from array */
// Method: for...of
const nums2 = [5, 6, 8, 3, 4];

// === 🟡 INTERMEDIATE TASKS – for...of / for...in ===

/* 11. Sum all numbers in array */
// Method: for...of
const values = [10, 20, 30];

/* 12. Create new object with only boolean values */
// Method: for...in
const mixed = { a: true, b: 1, c: false, d: "yes" };

/* 13. Capitalize first letter of each word in array */
// Method: for...of
const names = ["alice", "bob", "carol"];

/* 14. Count numeric values in object */
// Method: for...in
const info = { a: 1, b: "two", c: 3 };

/* 15. Reverse a string */
// Method: for...of
const original = "code";

/* 16. Collect keys into array from object */
// Method: for...in
const profile = { id: 101, username: "admin" };

/* 17. Flatten nested array (1 level) */
// Method: for...of
const nested = [[1, 2], [3, 4], [5]];

/* 18. Count how many times a letter appears */
// Method: for...of
const message = "banana";

/* 19. Count properties starting with "is" */
// Method: for...in
const flags = { isAdmin: true, isActive: false, name: "User" };

/* 20. Print string lengths from array */
// Method: for...of
const words = ["js", "react", "html"];
