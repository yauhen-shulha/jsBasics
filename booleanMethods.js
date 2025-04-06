/* 1. Convert any value to a Boolean */
// Method: Boolean()
const value = 0;
// Output: false

/* 2. Check if a value is truthy or falsy */
// Method: !! (double NOT)
const test = "hello";
// Output: true

/* 3. Use logical AND */
// Operator: &&
const isLoggedIn = true;
const isAdmin = true;
// Output: true if both are true

/* 4. Use logical OR */
// Operator: ||
const hasAccess = false;
const isVIP = true;
// Output: true if at least one is true

/* 5. Use logical NOT */
// Operator: !
const loggedOut = false;
// Output: true

/* 6. Strict equality check */
// Operator: ===
const a = 1;
const b = "1";
// Output: false

/* 7. Loose equality check (not recommended) */
// Operator: ==
const c = 1;
const d = "1";
// Output: true

/* 8. Check for property existence in object */
// Operator: in
const user = { name: "Alice" };
// Output: "name" in user → true

/* 9. Check for value in array */
// Method: .includes()
const roles = ["admin", "editor"];
// Output: roles.includes("admin") → true

/* 10. Ternary for boolean-based decisions */
// Operator: ? :
const isActive = true;
const status = isActive ? "Online" : "Offline";
// Output: "Online"
