// === 📘 ARRAY METHODS – EXPLANATIONS + EXAMPLES ===

/* .length – get number of items */
const ex1 = [1, 2, 3];
console.log(ex1.length); // 3

/* .push() – add item to end */
const ex2 = [1, 2];
ex2.push(3);
console.log(ex2); // [1, 2, 3]

/* .pop() – remove last item */
const ex3 = [1, 2, 3];
ex3.pop();
console.log(ex3); // [1, 2]

/* .unshift() – add item to start */
const ex4 = ["b", "c"];
ex4.unshift("a");
console.log(ex4); // ["a", "b", "c"]

/* .shift() – remove first item */
const ex5 = [10, 20, 30];
ex5.shift();
console.log(ex5); // [20, 30]

/* .join() – convert array to string */
const ex6 = ["a", "b", "c"];
console.log(ex6.join("-")); // "a-b-c"

/* .includes() – check if item exists */
const ex7 = [1, 2, 3];
console.log(ex7.includes(2)); // true

/* .indexOf() – get index of item */
const ex8 = ["dog", "cat"];
console.log(ex8.indexOf("cat")); // 1

/* .reverse() – reverse array in place */
const ex9 = [1, 2, 3];
ex9.reverse();
console.log(ex9); // [3, 2, 1]

/* .split() – turn string into array */
const ex10 = "a,b,c";
console.log(ex10.split(",")); // ["a", "b", "c"]

/* .sort() – sort array items (strings by default) */
const ex11 = [3, 1, 2];
ex11.sort();
console.log(ex11); // [1, 2, 3]



// === 🟢 BEGINNER LEVEL – Tasks (method name included) ===

/* 1. Get the length of the array */
// Method: .length
const arr1 = [10, 20, 30];

/* 2. Add a value to the end */
// Method: .push()
const arr2 = [1, 2, 3];

/* 3. Remove the last element */
// Method: .pop()
const arr3 = [5, 6, 7];

/* 4. Add an item to the beginning */
// Method: .unshift()
const arr4 = ["b", "c"];

/* 5. Remove the first item */
// Method: .shift()
const arr5 = [100, 200, 300];

/* 6. Join array into a string with "-" */
// Method: .join()
const arr6 = ["a", "b", "c"];

/* 7. Check if array includes number 4 */
// Method: .includes()
const arr7 = [1, 2, 3, 4, 5];

/* 8. Find the index of "dog" */
// Method: .indexOf()
const arr8 = ["cat", "dog", "bird"];

/* 9. Reverse the array */
// Method: .reverse()
const arr9 = [1, 2, 3];

/* 10. Convert a string to an array */
// Method: .split()
const str = "one,two,three";



// === 🟡 INTERMEDIATE LEVEL – Tasks (no method name) ===

/* 11. Sort the array in ascending order */
const arr11 = [5, 1, 4, 2];

/* 12. Get a slice of the array from index 1 to 3 */
const arr12 = ["a", "b", "c", "d", "e"];

/* 13. Remove 2 items starting from index 1 */
const arr13 = ["x", "y", "z", "w"];

/* 14. Join array of words with spaces */
const arr14 = ["Hello", "JavaScript", "World"];

/* 15. Check if array contains only numbers */
const arr15 = [1, 2, "3", 4];

/* 16. Find the index of the last item */
const arr16 = ["first", "middle", "last"];

/* 17. Add multiple items to the start */
const arr17 = [3, 4, 5];

/* 18. Remove and return the last element */
const arr18 = ["apple", "banana", "cherry"];

/* 19. Turn an array into a comma-separated string */
const arr19 = [100, 200, 300];

/* 20. Check if array includes "admin" */
const arr20 = ["user", "editor", "admin"];
