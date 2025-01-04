"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
// Input 1:
const car = new Car("Honda", "Civic", 2018);
// Output 1:
console.log(car.getCarAge()); // Output: 7 (assuming current year is 2025)
