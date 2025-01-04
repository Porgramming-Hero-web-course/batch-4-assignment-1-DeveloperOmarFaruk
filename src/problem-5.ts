function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Input:
const person = { name: "Alice", age: 30 };

// Output:
console.log(getProperty(person, "name")); // Output: Alice
