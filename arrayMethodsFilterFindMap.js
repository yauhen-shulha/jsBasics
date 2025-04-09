// === 📘 ARRAY METHODS – filter, map, find (EXPLANATIONS + EXAMPLES) ===

/* .find() – returns the first element that matches a condition */
const ex1 = [10, 15, 20];
const firstOver10 = ex1.find(num => num > 10);
console.log(firstOver10); // 15

/* .filter() – returns all elements that match a condition */
const ex2 = [1, 2, 3, 4, 5];
const evens = ex2.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

/* .map() – transforms each element and returns a new array */
const ex3 = [1, 2, 3];
const doubled = ex3.map(n => n * 2);
console.log(doubled); // [2, 4, 6]



// === 🟢 BEGINNER LEVEL – filter, map, find (with method names) ===

/* 1. Find the first number greater than 10 */
// Method: .find()
const arr1 = [3, 7, 12, 9];

/* 2. Filter out numbers less than 5 */
// Method: .filter()
const arr2 = [2, 5, 8, 3];

/* 3. Create an array of numbers doubled */
// Method: .map()
const arr3 = [1, 2, 3];

/* 4. Find the first string with length > 4 */
// Method: .find()
const arr4 = ["cat", "tiger", "dog", "elephant"];

/* 5. Filter strings that start with "A" */
// Method: .filter()
const arr5 = ["Apple", "Banana", "Avocado", "Mango"];

/* 6. Map array of names to uppercase */
// Method: .map()
const arr6 = ["alice", "bob", "carol"];

/* 7. Find the first even number */
// Method: .find()
const arr7 = [1, 3, 5, 6, 7];

/* 8. Filter numbers divisible by 3 */
// Method: .filter()
const arr8 = [3, 5, 6, 8, 9];

/* 9. Map words to their lengths */
// Method: .map()
const arr9 = ["hi", "hello", "world"];

/* 10. Filter words with length === 3 */
// Method: .filter()
const arr10 = ["cat", "fish", "dog", "lion"];



// === 🟡 INTERMEDIATE LEVEL – filter, map, find (no method names) ===

/* 11. Find the first number that’s negative */
const arr11 = [10, -3, 5, -8];

/* 12. Filter out strings that don't contain the letter "e" */
const arr12 = ["car", "bike", "plane", "bus"];

/* 13. Map prices to include 15% tax */
const arr13 = [100, 200, 300];

/* 14. Find the first word that ends with "ing" */
const arr14 = ["run", "swimming", "jumping", "walk"];

/* 15. Filter names that are longer than 4 letters */
const arr15 = ["Tom", "Alice", "Bob", "Sophia"];

/* 16. Map numbers to strings like "Number: x" */
const arr16 = [1, 2, 3];

/* 17. Find the first number divisible by 4 */
const arr17 = [5, 7, 9, 12, 15];

/* 18. Filter palindromes from array */
const arr18 = ["level", "cat", "radar", "dog"];

/* 19. Map strings to first letters */
const arr19 = ["apple", "banana", "cherry"];

/* 20. Filter numbers greater than average */
const arr20 = [10, 20, 30, 40];
