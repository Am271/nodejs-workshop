cir = require("./circle"); //import the modules from "circle.js"
square = require("./square");

radius = 5;
side = 3;

console.log("Circle area: ", + cir.area(radius));
console.log("Circle perimeter: ", + cir.perimeter(radius));
console.log("Square area: " + square.area(side));
console.log("Square perimeter: " + square.perimeter(side));