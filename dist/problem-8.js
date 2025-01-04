"use strict";
function validateKeys(obj, keys) {
    return keys.every((key) => key in obj);
}
// Input:
const personInfo = { name: "Alice", age: 25, email: "alice@example.com" };
// Output:
console.log(validateKeys(personInfo, ["name", "age"])); // Output: true
console.log(validateKeys(personInfo, ["name", "phone"])); // Output: false
