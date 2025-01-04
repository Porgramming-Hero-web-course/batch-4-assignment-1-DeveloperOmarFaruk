## The Significance of Union and Intersection Types in TypeScript

### What are Union Types in TypeScript?

A union type allows a variable to be of any one of several types, offering more flexibility. The | operator is used to separate these types, ensuring dynamic type handling.

### Union Types Example:

let value: string | number;

value = "Hello, Omar Faruk";
value = 17;  
value = true;

### What are Intersection Types in TypeScript?

With intersection types, a value can be composed of multiple types. The & operator combines the types, ensuring that the value conforms to every type involved.

### Intersection Types Example:

interface Person {
name: string;
age: number;
}

interface Address {
street: string;
city: string;
}

type Employee = Person & Address;

let employee: Employee = {
name: "Omar Faruk",
age: 50,
street: "House 10, Road-7, Block-c, Mirpur-10",
city: "Dhaka",
};

### Union Types are Important

1. User Inut
2. Event handling
3. API responses

### Intersection Types are Important

1. Combining multiple interfaces
2. Enhancing functionality

### Union Types VS Intersection Types

1. When a value can belong to several types, union types help manage those possibilities, allowing for unique handling based on the type.

2. Intersection types are useful for creating a value that holds all the features of multiple types simultaneously.
