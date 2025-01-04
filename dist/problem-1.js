"use strict";
function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
// Input:
const result = sumArray([1, 2, 3, 4, 5]);
// Output:
console.log(result); // Output: 15
