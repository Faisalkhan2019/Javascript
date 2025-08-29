let total = 0 
let count = 1
while (count <= 10) {
total += count;
count += 1;
}

// console.log(count);
// console.log(total);


// Example 1

let doh = "Faisal".toUpperCase;

// console.log(typeof doh); // Output: function

// console.log(doh);


// Example 2

let myStr = "Hamadan".length; 
// console.log(myStr); // output: 7


// Example 3 

// ternary operator 

 const myN = "Khan".toUpperCase()
 let message;

 myN ? message = `${myN} You are a Web Developer`: ` ${myN} You are other person`

//  console.log(message);
 

// example 4 
// Unary Operator +

let myNN = "12" //  Using unary plus to convert string to number
let nM = +myNN

// console.log(typeof nM);

// one more Unary example 

let uN = +"Hamdan"
// console.log(uN); // NaN but its data type is Number


//Example 5

// Decimal to Binary conversion in JS 

let myNumber = 101;
let myNumber2 = myNumber.toString(2)

// let convertToString = myNumber.toString(2)

// console.log(myNumber2);


// EXAMPLE 6 

// OBJECT delete operator and the binary "in" operator 


// let anObj = {
//     "name": "Hamdan",
//     age: 3,
//     class: "PG"
// }
// // console.log(anObj['name']);

// delete anObj.class
// console.log(anObj.class); // undefined


// more example of this

let myObj = {
    left: 1, 
    right: 2
}

delete myObj.left  // false
// console.log(myObj.left); // undefined


// In JavaScript, the in operator is used to check if a specified property exists in an object or its prototype chain. It returns true if the property is found, and false otherwise

// console.log('left' in myObj); // false


 let myObj2 = {
    test: undefined
 }
//  console.log('test' in myObj2); // true 
 

let objectA = {a: 1, b: 2};
let objectB = {b: 3, c: 4};
let objectC = {d: 5, e: 6};
let result = Object.assign(objectA, objectB, objectC);
// console.log(result);


// let myV = "22"
// let myV2 = 22

// let myV3 = myV = myV2
// console.log(typeof myV3);




// EXAMPLE 6 


const score = {
    visitor: 1,
    home: 0
}
score.visitor = "Khan"; // This is Okay

score = { // but this is not okay due to const declaration of above
    visitor: 3,
    home: 3
}
console.log(score.visitor);

