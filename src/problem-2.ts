function removeDuplicates(numbers: number[]): number[] {
  const seenValue = new Set<number>();
  return numbers.filter((number) => {
    if (!seenValue.has(number)) {
      seenValue.add(number);
      return true;
    }
    return false;
  });
}

// Input:
const result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// Output:
console.log(result1); // Output: [1, 2, 3, 4, 5]
