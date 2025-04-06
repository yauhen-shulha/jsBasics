// === 🟢 BEGINNER LEVEL – String Methods (with method names) ===

/* 1. Find the length of the string */
// Method: .length
const str1 = "Hello, world!";
// Output: 13

/* 2. Convert the string to uppercase */
// Method: .toUpperCase()
const str2 = "good morning";
// Output: "GOOD MORNING"

/* 3. Convert the string to lowercase */
// Method: .toLowerCase()
const str3 = "JAVASCRIPT";
// Output: "javascript"

/* 4. Get the first character of the string */
// Method: .charAt()
const str4 = "banana";
// Output: "b"

/* 5. Check if the string includes the word "day" */
// Method: .includes()
const str5 = "Have a nice day!";
// Output: true

/* 6. Find the position of "cat" in the string */
// Method: .indexOf()
const str6 = "The black cat is sleeping";
// Output: 10

/* 7. Extract the word "sun" using slice */
// Method: .slice()
const str7 = "sunshine";
// Output: "sun"

/* 8. Replace the word "bad" with "good" */
// Method: .replace()
const str8 = "This is a bad idea";
// Output: "This is a good idea"

/* 9. Remove whitespace from both ends of the string */
// Method: .trim()
const str9 = "   clean me up   ";
// Output: "clean me up"

/* 10. Split the string into an array by comma */
// Method: .split()
const str10 = "apple,banana,cherry";
// Output: ["apple", "banana", "cherry"]


// === 🟡 INTERMEDIATE LEVEL – String Methods (no method names) ===

/* 11. Check if the string starts with "Hello" */
const str11 = "Hello there!";
// Output: true

/* 12. Check if the string ends with "world" */
const str12 = "Welcome to the world";
// Output: true

/* 13. Extract the word "code" from the string */
const str13 = "I love to code in JavaScript";
// Output: "code"

/* 14. Replace all "!" with "." */
const str14 = "Wow! Amazing! Incredible!";
// Output: "Wow. Amazing. Incredible."

/* 15. Count how many times the letter "a" appears */
const str15 = "Banana";
// Output: 3

/* 16. Capitalize only the first letter of the string */
const str16 = "javascript is cool";
// Output: "Javascript is cool"

/* 17. Mask all but the last 4 characters with "*" */
const str17 = "123456789";
// Output: "*****6789"

/* 18. Get the last 3 characters of the string */
const str18 = "developer";
// Output: "per"

/* 19. Combine an array into a string with " - " separator */
const arr1 = ["red", "green", "blue"];
// Output: "red - green - blue"

/* 20. Reverse the string */
const str19 = "world";
// Output: "dlrow"


// === 🔴 ADVANCED LEVEL – String Methods (real-world logic) ===

/* 21. Format a phone number: "1234567890" → "(123) 456-7890" */
const phone = "1234567890";
// Output: "(123) 456-7890"

/* 22. Extract domain from an email */
const email = "user@example.com";
// Output: "example.com"

/* 23. Convert "my-name-is" into "My Name Is" */
const slug = "my-name-is";
// Output: "My Name Is"

/* 24. Count how many words are in the sentence */
const sentence = "This is a simple sentence";
// Output: 5

/* 25. Obfuscate email: user@example.com → u***@example.com */
const email2 = "user@example.com";
// Output: "u***@example.com"

/* 26. Remove all digits from the string */
const messy = "abc123def456";
// Output: "abcdef"

/* 27. Convert string to camelCase: "hello world again" */
const input = "hello world again";
// Output: "helloWorldAgain"

/* 28. Check if a string is a valid palindrome (ignore case) */
const maybe = "RaceCar";
// Output: true

/* 29. Find the most frequent letter in the string */
const str20 = "javascript rocks";
// Output: "s"

/* 30. Clean up the string: remove extra spaces and capitalize each word */
const messy2 = "   this   is   messy text ";
// Output: "This Is Messy Text"
