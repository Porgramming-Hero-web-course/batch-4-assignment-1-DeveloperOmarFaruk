"use strict";
function countWordOccurrences(bakko, shobdo) {
    const bakkoLowerCase = bakko.toLowerCase();
    const shodoLowerCase = shobdo.toLowerCase();
    const bakkos = bakkoLowerCase.split(" ");
    const countNumber = bakkos.filter((w) => w === shodoLowerCase).length;
    return countNumber;
}
// Input:
const result2 = countWordOccurrences("I love typescript", "typescript");
// Output:
console.log(result2); // Output: 1
