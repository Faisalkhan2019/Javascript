// Lecture 12

// Topic Numbers and Math

// ********Number********


const score = 400;

// console.log(score);

const myScore = new Number(score);
// console.log(myScore);
// console.log(myScore.toString()); // now score is string
// console.log(myScore.toString().length); // 3
// console.log(myScore.toFixed(2)); // 400.00

const anotherNumber = 53.4567;

// console.log(anotherNumber.toPrecision(4));

const myNumber = 1000000;

// console.log(myNumber.toLocaleString("en-IN"));


// ********Math********

// console.log(Math); // Object [Math] {}

// console.log(Math.max(10, 5, 99, 42)); // Output: 99
// console.log(Math.min(10, 5, 99, 42)); // Output: 5

// console.log(Math.abs(-5)) // 5 - Absolute value (makes negative numbers positive)
// console.log(Math.round(4.6)); // 4 - Rounds to nearest integer (smallest or bigger)
// console.log(Math.ceil(5.6)); // 6  - Rounds up to next integer

 
// console.log(Math.floor(5.6)); // 5 -  Rounds down to previous integer

// console.log(Math.pow(2,2)); // 4 - Power function (x raised to y)

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10)+1)) 


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1)+min));




