// === 🟢 BEGINNER LEVEL – Object Methods (with method names) ===

/* 1. Get all keys from the object */
// Method: Object.keys()
const obj1 = { name: "Alice", age: 25 };
// Output: ["name", "age"]

/* 2. Get all values from the object */
// Method: Object.values()
const obj2 = { country: "Poland", code: 48 };
// Output: ["Poland", 48]

/* 3. Get all entries (key-value pairs) */
// Method: Object.entries()
const obj3 = { x: 10, y: 20 };
// Output: [["x", 10], ["y", 20]]

/* 4. Check if object has a specific property */
// Method: .hasOwnProperty()
const obj4 = { type: "fruit", color: "red" };
// Output: true

/* 5. Merge two objects into one */
// Method: Object.assign()
const a = { a: 1 };
const b = { b: 2 };
// Output: { a: 1, b: 2 }

/* 6. Convert an object to a JSON string */
// Method: JSON.stringify()
const obj5 = { name: "Tom", age: 30 };
// Output: '{"name":"Tom","age":30}'

/* 7. Parse a JSON string into an object */
// Method: JSON.parse()
const jsonStr = '{"brand":"Ford","year":2020}';
// Output: { brand: "Ford", year: 2020 }

/* 8. Freeze an object so it can't be changed */
// Method: Object.freeze()
const settings = { darkMode: true };
// Output: frozen object (can’t be modified)

/* 9. Check if an object is frozen */
// Method: Object.isFrozen()
const config = Object.freeze({ api: "v1" });
// Output: true

/* 10. Get the number of properties */
// Method: Object.keys().length
const obj6 = { a: 1, b: 2, c: 3 };
// Output: 3


// === 🟡 INTERMEDIATE LEVEL – Object Methods (no method names) ===

/* 11. Create a shallow copy of an object */
const person = { name: "Anna", age: 22 };
// Output: { name: "Anna", age: 22 }

/* 12. Check if object is empty */
const emptyObj = {};
// Output: true

/* 13. Loop through all keys and print them */
const data = { id: 1, type: "admin" };
// Output: id, type

/* 14. Add a new key-value pair only if key doesn't exist */
const user = { name: "John" };
const key = "email", value = "john@mail.com";
// Output: { name: "John", email: "john@mail.com" }

/* 15. Remove a key from an object */
const obj7 = { a: 1, b: 2 };
// Remove: b
// Output: { a: 1 }

/* 16. Check if value exists in object */
const obj8 = { a: 1, b: 2, c: 3 };
// Check: value 2 → Output: true

/* 17. Convert keys to uppercase */
const obj9 = { name: "Eva", country: "Norway" };
// Output: { NAME: "Eva", COUNTRY: "Norway" }

/* 18. Get a list of keys with numeric values */
const obj10 = { age: 25, name: "Dan", score: 88 };
// Output: ["age", "score"]

/* 19. Convert object to an array of strings */
// Example: { x: 1, y: 2 } → ["x=1", "y=2"]
const obj11 = { x: 1, y: 2 };
// Output: ["x=1", "y=2"]

/* 20. Count how many values are booleans */
const obj12 = { a: true, b: false, c: "yes", d: true };
// Output: 3


// === 🔴 ADVANCED LEVEL – Real-World Object Challenges ===

/* 21. Group people by role */
const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Eve", role: "admin" }
];
// Output: { admin: [...], user: [...] }

/* 22. Filter properties based on value type (only strings) */
const mixed = { a: "hello", b: 2, c: true };
// Output: { a: "hello" }

/* 23. Flatten nested object (1 level only) */
const nested = { a: 1, b: { c: 2, d: 3 } };
// Output: { a: 1, c: 2, d: 3 }

/* 24. Get the longest key in an object */
const obj13 = { a: 1, longestKeyHere: 2 };
// Output: "longestKeyHere"

/* 25. Check deep equality between two objects */
const objA = { x: 1, y: 2 };
const objB = { x: 1, y: 2 };
// Output: true

/* 26. Capitalize the first letter of every key */
const obj14 = { name: "sue", country: "france" };
// Output: { Name: "sue", Country: "france" }

/* 27. Convert object into query string */
// Example: { a: 1, b: 2 } → "a=1&b=2"
const obj15 = { a: 1, b: 2 };
// Output: "a=1&b=2"

/* 28. Find the key with the highest value */
const obj16 = { apples: 3, oranges: 5, bananas: 2 };
// Output: "oranges"

/* 29. Sort object keys alphabetically */
const obj17 = { c: 3, a: 1, b: 2 };
// Output: { a: 1, b: 2, c: 3 }

/* 30. Replace all null values with "N/A" */
const obj18 = { name: null, age: 25, city: null };
// Output: { name: "N/A", age: 25, city: "N/A" }
