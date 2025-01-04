"use strict";
function getProperty(obj, key) {
    return obj[key];
}
// Input:
const person = { name: "Alice", age: 30 };
// Output:
console.log(getProperty(person, "name")); // Output: Alice
