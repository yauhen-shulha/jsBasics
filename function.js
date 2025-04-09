// === 📘 FUNCTIONS IN JAVASCRIPT – EXPLAINED CLEARLY ===

/*
📌 A function is a reusable block of code that performs a specific task.
📌 It helps you avoid repeating yourself.

How to define a function:
function name(parameter1, parameter2) {
  // code
  return result;
}

How to call a function:
name(argument1, argument2);
*/

// Example:
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// === 📘 WHAT IS "return"? (explained like for kids) ===

/*
🧸 Imagine a function is like a vending machine.
You give it something (like a coin), and it gives you something back (like a candy).

That "thing" it gives back is called: 👉 return

💬 return means: "Here’s your answer!"
You can use that answer right away, or save it in a variable.
*/

// Example 1: return used directly
function giveCandy() {
  return "🍬";
}

console.log(giveCandy()); // Output: "🍬"

// Example 2: return assigned to a variable
function add(a, b) {
  return a + b;
}

const result = add(5, 3); // 5 + 3 = 8
console.log(result);      // Output: 8

/*
💡 So yes — you can "catch" what the function returns using a variable,
and use it later anywhere in your code!
*/

// === 📘 EXAMPLE: Using a loop inside a function ===

/*
📦 You can put a loop (like for, while) inside a function
to repeat something multiple times when the function is called.
*/

// This function prints numbers from 1 to the number you give it
function countTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Call the function
countTo(5);

/*
Output:
1
2
3
4
5
*/

// === 🟢 BEGINNER LEVEL TASKS – With Podskazki (Hints) ===

/* 1. Write a function that adds two numbers */
// Podskazka: function add(a, b) { ... }
// Output: add(2, 3) → 5

/* 2. Create a function that returns the square of a number */
// Podskazka: function square(n) { ... }
// Output: square(4) → 16

/* 3. Write a function that says "Good morning, NAME!" */
// Podskazka: function sayMorning(name) { ... }
// Output: sayMorning("Tom") → "Good morning, Tom!"

/* 4. Create a function that multiplies three numbers */
// Podskazka: function multiply(a, b, c) { ... }
// Output: multiply(2, 3, 4) → 24

/* 5. Write a function that returns the length of a string */
// Podskazka: function stringLength(text) { ... }
// Output: stringLength("Hello") → 5

/* 6. Write a function that returns the first letter of a word */
// Podskazka: function firstChar(word) { ... }
// Output: firstChar("Dog") → "D"

/* 7. Write a function that returns double the input number */
// Podskazka: function double(x) { ... }
// Output: double(6) → 12

/* 8. Write a function that returns true if number is even */
// Podskazka: function isEven(n) { ... }
// Output: isEven(4) → true

/* 9. Write a function that joins two words with a space */
// Podskazka: function joinWords(w1, w2) { ... }
// Output: joinWords("Good", "Job") → "Good Job"

/* 10. Write a function that returns the last character of a string */
// Podskazka: function lastChar(word) { ... }
// Output: lastChar("Cat") → "t"

// === 🟡 INTERMEDIATE LEVEL TASKS – Without Hints ===

/* 11. Return the bigger of two numbers */
const num1 = 10;
const num2 = 20;

/* 12. Check if a string contains the letter "a" */
const text = "banana";

/* 13. Count how many characters are in both words combined */
const word1 = "hello";
const word2 = "world";

/* 14. Check if number is divisible by 3 */
const n = 18;

/* 15. Return true if both strings start with the same letter */
const a = "Dog";
const b = "Desk";

/* 16. Write a function that reverses a string */
const phrase = "openai";

/* 17. Write a function that returns the area of a rectangle */
const width = 5;
const height = 10;

/* 18. Write a function that returns a greeting based on hour (0–23) */
// Example: 8 → "Good morning", 15 → "Good afternoon"

/* 19. Create a function that checks if number is between 10 and 20 */
const value = 15;

/* 20. Write a function that returns initials from full name */
// Input: "John Doe" → Output: "J.D."


// === 📘 FUNCTIONS WITH LOOPS + RETURN – EXPLANATION & EXAMPLE ===

/*
Yes! A function can have a loop inside it,
and still use `return` to give back a result.

Example: Sum numbers from 1 to n
*/

function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const result = sumTo(5);
console.log(result); // 15

// === 🟢 BEGINNER TASKS – Loop inside function + return (with podskazki) ===

/* 1. Write a function that returns the sum of numbers 1 to n */
// Podskazka: use a for loop, total += i, return total
// Input: 4 → Output: 10

/* 2. Write a function that counts how many even numbers from 1 to n */
// Podskazka: use a loop + check if number % 2 === 0
// Input: 6 → Output: 3

/* 3. Return the product (multiply) of all numbers from 1 to n */
// Podskazka: let product = 1; then multiply inside loop
// Input: 4 → Output: 24

/* 4. Create a function that returns the number of vowels in a word */
// Podskazka: loop through string, check if char is in "aeiou"
// Input: "apple" → Output: 2

/* 5. Create a function that returns how many letters are uppercase */
// Podskazka: use char === char.toUpperCase()
// Input: "HeLLo" → Output: 3

// === 🟡 INTERMEDIATE TASKS – Loop + return (no podskazki) ===

/* 6. Return true if any number in array is negative */
const arr1 = [5, -2, 9];

/* 7. Count how many times the letter "a" appears in a string */
const str1 = "banana";

/* 8. Write a function that returns the factorial of a number */
const num1 = 5;

/* 9. Create a function that returns the average of all numbers in an array */
const arr2 = [10, 20, 30];

/* 10. Create a function that returns the longest word from an array */
const words = ["hi", "welcome", "to", "JavaScript"];
