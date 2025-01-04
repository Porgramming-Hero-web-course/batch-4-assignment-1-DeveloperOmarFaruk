"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return shape.width * shape.height;
    }
}
// Input 1: Circle
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Output: 78.53981633974483
// Input 2: Rectangle
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); // Output: 24
