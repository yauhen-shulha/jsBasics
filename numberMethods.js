// === 📘 NUMBER METHODS – EXPLANATIONS + EXAMPLES ===

/*
📌 Number()  
✔️ Converts strings or other types to a number
*/

const n1 = Number("42");
console.log(n1); // 42

/*
📌 parseInt()  
✔️ Parses a string and returns an integer
*/

const n2 = parseInt("123px");
console.log(n2); // 123

/*
📌 parseFloat()  
✔️ Parses a string and returns a float (decimal number)
*/

const n3 = parseFloat("3.14 meters");
console.log(n3); // 3.14

/*
📌 Math.round()  
✔️ Rounds to the nearest whole number
*/

const n4 = Math.round(5.6);
console.log(n4); // 6

/*
📌 Math.floor()  
✔️ Rounds down to the nearest whole number
*/

const n5 = Math.floor(7.9);
console.log(n5); // 7

/*
📌 Math.ceil()  
✔️ Rounds up to the nearest whole number
*/

const n6 = Math.ceil(4.1);
console.log(n6); // 5

/*
📌 .toFixed()  
✔️ Returns a string with a number fixed to a certain number of decimals
*/

const n7 = 3.14159;
console.log(n7.toFixed(2)); // "3.14"

/*
📌 Math.abs()  
✔️ Returns the absolute (positive) value of a number
*/

const n8 = Math.abs(-50);
console.log(n8); // 50

/*
📌 isNaN()  
✔️ Checks if a value is Not a Number
*/

console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true

/*
📌 isFinite()  
✔️ Checks if a value is a finite number
*/

console.log(isFinite(999)); // true
console.log(isFinite(Infinity)); // false

// === 🟢 BEGINNER TASKS – JavaScript Number Methods (with method names) ===

/* 1. Convert string to number */
// Method: Number()
const str1 = "42";

/* 2. Parse integer from a string */
// Method: parseInt()
const str2 = "123px";

/* 3. Parse float from a string */
// Method: parseFloat()
const str3 = "3.14 meters";

/* 4. Round number to nearest integer */
// Method: Math.round()
const value1 = 5.6;

/* 5. Round number down */
// Method: Math.floor()
const value2 = 7.9;

/* 6. Round number up */
// Method: Math.ceil()
const value3 = 4.1;

/* 7. Limit decimal places to 2 */
// Method: .toFixed()
const num1 = 3.14159;

/* 8. Get absolute value */
// Method: Math.abs()
const value4 = -50;

/* 9. Check if a value is NaN */
// Method: isNaN()
const result = NaN;

/* 10. Check if a value is finite */
// Method: isFinite()
const test = 999;
