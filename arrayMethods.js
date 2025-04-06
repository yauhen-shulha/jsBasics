// === 🟢 BEGINNER LEVEL – Array Methods (with method names) ===

/* 1. Find the length of the array */
// Method: .length
const arr1 = [10, 20, 30];
// Output: 3

/* 2. Add an element to the end of the array */
// Method: .push()
const arr2 = [1, 2, 3];
// Output: [1, 2, 3, 4]

/* 3. Remove the last element from the array */
// Method: .pop()
const arr3 = [5, 6, 7];
// Output: [5, 6]

/* 4. Add an element to the beginning of the array */
// Method: .unshift()
const arr4 = ["b", "c"];
// Output: ["a", "b", "c"]

/* 5. Remove the first element of the array */
// Method: .shift()
const arr5 = [100, 200, 300];
// Output: [200, 300]

/* 6. Join array elements into a string */
// Method: .join()
const arr6 = ["a", "b", "c"];
// Output: "a-b-c"

/* 7. Check if the array includes the number 4 */
// Method: .includes()
const arr7 = [1, 2, 3, 4, 5];
// Output: true

/* 8. Find the index of "dog" in the array */
// Method: .indexOf()
const arr8 = ["cat", "dog", "bird"];
// Output: 1

/* 9. Reverse the array */
// Method: .reverse()
const arr9 = [1, 2, 3];
// Output: [3, 2, 1]

/* 10. Convert a string to an array */
// Method: .split()
const str = "one,two,three";
// Output: ["one", "two", "three"]


// === 🟡 INTERMEDIATE LEVEL – Array Methods (no method names) ===

/* 11. Sort the array in ascending order */
const arr11 = [5, 1, 4, 2];
// Output: [1, 2, 4, 5]

/* 12. Get a slice of the array from index 1 to 3 */
const arr12 = ["a", "b", "c", "d", "e"];
// Output: ["b", "c"]

/* 13. Remove 2 items starting from index 1 */
const arr13 = ["x", "y", "z", "w"];
// Output: ["x", "w"]

/* 14. Double every number in the array */
const arr14 = [2, 4, 6];
// Output: [4, 8, 12]

/* 15. Filter out numbers less than 10 */
const arr15 = [5, 10, 15, 2, 25];
// Output: [10, 15, 25]

/* 16. Check if all numbers are even */
const arr16 = [2, 4, 6, 8];
// Output: true

/* 17. Check if at least one number is odd */
const arr17 = [2, 4, 7, 8];
// Output: true

/* 18. Find the first number greater than 50 */
const arr18 = [10, 40, 60, 80];
// Output: 60

/* 19. Sum all numbers in the array */
const arr19 = [5, 10, 15];
// Output: 30

/* 20. Create an array of string lengths */
const arr20 = ["hi", "hello", "hey"];
// Output: [2, 5, 3]


// === 🔴 ADVANCED LEVEL – Array Methods (real-world challenges) ===

/* 21. Remove duplicates from the array */
const arr21 = [1, 2, 2, 3, 4, 4, 5];
// Output: [1, 2, 3, 4, 5]

/* 22. Flatten a nested array (one level deep) */
const arr22 = [[1, 2], [3, 4], [5]];
// Output: [1, 2, 3, 4, 5]

/* 23. Group numbers by even and odd */
const arr23 = [1, 2, 3, 4, 5];
// Output: { even: [2, 4], odd: [1, 3, 5] }

/* 24. Count how many times each number appears */
const arr24 = [1, 2, 2, 3, 1, 1];
// Output: { 1: 3, 2: 2, 3: 1 }

/* 25. Convert array of strings to title case */
const arr25 = ["hello world", "javascript", "open ai"];
// Output: ["Hello World", "Javascript", "Open Ai"]

/* 26. Remove falsy values (null, undefined, 0, "", false) */
const arr26 = [0, 1, false, 2, "", 3, null];
// Output: [1, 2, 3]

/* 27. Chunk array into groups of 2 */
const arr27 = [1, 2, 3, 4, 5, 6];
// Output: [[1,2],[3,4],[5,6]]

/* 28. Get the intersection of two arrays */
const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5, 6];
// Output: [3, 4]

/* 29. Merge two arrays and remove duplicates */
const arr28 = [1, 2, 3];
const arr29 = [3, 4, 5];
// Output: [1, 2, 3, 4, 5]

/* 30. Convert array of objects to one object using IDs as keys */
const arr30 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
// Output: { 1: "Alice", 2: "Bob" }
