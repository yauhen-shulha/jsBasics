// === 🟢 BEGINNER LEVEL – filter, map, find (with method names) ===

/* 1. Find the first number greater than 10 */
// Method: .find()
const arr1 = [3, 7, 12, 9];
// Output: 12

/* 2. Filter out numbers less than 5 */
// Method: .filter()
const arr2 = [2, 5, 8, 3];
// Output: [5, 8]

/* 3. Create an array of numbers doubled */
// Method: .map()
const arr3 = [1, 2, 3];
// Output: [2, 4, 6]

/* 4. Find the first string with length > 4 */
// Method: .find()
const arr4 = ["cat", "tiger", "dog", "elephant"];
// Output: "tiger"

/* 5. Filter strings that start with "A" */
// Method: .filter()
const arr5 = ["Apple", "Banana", "Avocado", "Mango"];
// Output: ["Apple", "Avocado"]

/* 6. Map array of names to uppercase */
// Method: .map()
const arr6 = ["alice", "bob", "carol"];
// Output: ["ALICE", "BOB", "CAROL"]

/* 7. Find the first even number */
// Method: .find()
const arr7 = [1, 3, 5, 6, 7];
// Output: 6

/* 8. Filter numbers divisible by 3 */
// Method: .filter()
const arr8 = [3, 5, 6, 8, 9];
// Output: [3, 6, 9]

/* 9. Map words to their lengths */
// Method: .map()
const arr9 = ["hi", "hello", "world"];
// Output: [2, 5, 5]

/* 10. Filter words with length === 3 */
// Method: .filter()
const arr10 = ["cat", "fish", "dog", "lion"];
// Output: ["cat", "dog"]


// === 🟡 INTERMEDIATE LEVEL – filter, map, find (no method names) ===

/* 11. Find the first number that’s negative */
const arr11 = [10, -3, 5, -8];
// Output: -3

/* 12. Filter out strings that don't contain the letter "e" */
const arr12 = ["car", "bike", "plane", "bus"];
// Output: ["bike", "plane"]

/* 13. Map prices to include 15% tax */
const arr13 = [100, 200, 300];
// Output: [115, 230, 345]

/* 14. Find the first word that ends with "ing" */
const arr14 = ["run", "swimming", "jumping", "walk"];
// Output: "swimming"

/* 15. Filter names that are longer than 4 letters */
const arr15 = ["Tom", "Alice", "Bob", "Sophia"];
// Output: ["Alice", "Sophia"]

/* 16. Map numbers to strings like "Number: x" */
const arr16 = [1, 2, 3];
// Output: ["Number: 1", "Number: 2", "Number: 3"]

/* 17. Find the first number divisible by 4 */
const arr17 = [5, 7, 9, 12, 15];
// Output: 12

/* 18. Filter palindromes from array */
const arr18 = ["level", "cat", "radar", "dog"];
// Output: ["level", "radar"]

/* 19. Map strings to first letters */
const arr19 = ["apple", "banana", "cherry"];
// Output: ["a", "b", "c"]

/* 20. Filter numbers greater than average */
const arr20 = [10, 20, 30, 40];
// Output: [30, 40]


// === 🔴 ADVANCED LEVEL – filter, map, find (real-world style) ===

/* 21. Filter users who are active */
const users1 = [
  { name: "Alice", active: true },
  { name: "Bob", active: false }
];
// Output: [{ name: "Alice", active: true }]

/* 22. Map users to just their names */
const users2 = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Jerry" }
];
// Output: ["Tom", "Jerry"]

/* 23. Find the first product with price < 50 */
const products1 = [
  { name: "A", price: 100 },
  { name: "B", price: 45 },
  { name: "C", price: 60 }
];
// Output: { name: "B", price: 45 }

/* 24. Filter tasks that are not completed */
const tasks = [
  { task: "code", done: true },
  { task: "test", done: false }
];
// Output: [{ task: "test", done: false }]

/* 25. Map full names to first names */
const names1 = ["John Doe", "Alice Smith"];
// Output: ["John", "Alice"]

/* 26. Find the first string with more than 2 vowels */
const words1 = ["sky", "boot", "education", "flow"];
// Output: "education"

/* 27. Filter scores above 80 */
const scores1 = [
  { name: "Anna", score: 75 },
  { name: "Bob", score: 90 }
];
// Output: [{ name: "Bob", score: 90 }]

/* 28. Map array of URLs to domain names */
const urls = ["https://google.com", "https://openai.com"];
// Output: ["google.com", "openai.com"]

/* 29. Find the first even number greater than 20 */
const nums = [5, 12, 21, 24, 30];
// Output: 24

/* 30. Filter people aged 18–30 */
const people = [
  { name: "Tom", age: 17 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 35 }
];
// Output: [{ name: "Alice", age: 22 }]
