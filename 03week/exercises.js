'use strict';

// Creation of "cars"
let cars = ["Ford", "GM", "Toyota", "BMW"];
console.log(cars);

// Concat
let moreCars = ["Mercedes", "Fiat", "Mazda", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// indexOf and lastIndexOf
console.log(moreCars.indexOf("Honda"));
console.log(cars.lastIndexOf("GM"));

// join
console.log(totalCars.join(""));

// split
