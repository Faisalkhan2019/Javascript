// JavaScript Functions - Rest Operator, Object & Array Handling

// ==============================
// Example 1: Using Rest Operator with a Single Parameter
// ==============================

// The rest operator (...) allows a function to accept an indefinite number of arguments as an array
function calculateCartPrice(...num) {
  return num; // returns all arguments as an array
}

const price = calculateCartPrice(199, 200, 300);
console.log("Example 1 Output:", price); // Output: [199, 200, 300]

// ==============================
// Example 2: Using Rest Operator with Multiple Named Parameters
// ==============================

// This function accepts two fixed parameters and the rest of the values go into an array
function calculateCartPrice2(price1, price2, ...price3) {
  // price1 = 199, price2 = 200, price3 = [300]
  return price3; // only returns the remaining arguments as an array
}

const price2 = calculateCartPrice2(199, 200, 300);
console.log("Example 2 Output:", price2); // Output: [300]

// ==============================
// Example 3: Passing Object as an Argument to a Function
// ==============================

// Declare an object
const student = {
  name: "Hamdan",
  age: 3,
  class: "PG",
};

// Accept object as parameter and access its properties
function handleObj(anyObj) {
  // Destructure the object and use template literals to print values
  console.log(`Student name is: ${anyObj.name}, age: ${anyObj.age}, class: ${anyObj.class}`);
}

handleObj(student); // Function call with existing object

// ==============================
// Example 4: Passing Object Directly in Function Call
// ==============================

// Direct object literal passed into the function
handleObj({
  name: "Hamdan Khan",
  age: 4,
  class: "Nursery",
}); // Function call with object literal

// ==============================
// Example 5: Handling Arrays with Functions
// ==============================

// Declare an array
const cartPrice = [100, 200, 300];

// Function that receives an array and returns its third element
function handleArrays(getArray) {
  return getArray[2]; // return third item of array (index starts at 0)
}

console.log("Example 5 Output:", handleArrays(cartPrice)); // Output: 300
console.log("Example 5 Output with direct array:", handleArrays([1, 2, 3, 4])); // Output: 3

// ==============================
// Additional Example 6: Summing All Numbers Using Rest Operator
// ==============================

// Use rest operator to gather all inputs into an array and sum them using loop
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log("Example 6 Output:", sumAll(10, 20, 30)); // Output: 60

// ==============================
// Additional Example 7: Function with Default Parameters and Object
// ==============================

// Default parameter used if no value is provided during function call
function registerUser({ name = "Guest", age = 18 } = {}) {
  return `User ${name} is ${age} years old.`;
}

console.log("Example 7 Output:", registerUser({ name: "Ali", age: 25 })); // Output: User Ali is 25 years old.
console.log("Example 7 Output with default:", registerUser()); // Output: User Guest is 18 years old.

// ==============================
// Additional Example 8: Scope Level and Mini Hoisting in JavaScript
// ==============================

function one() {
  const author = "Faisal";
  function two() {
    const website = "SeekDigit.com";
    // Inner function can access variables from outer function (lexical scope)
    console.log(`Author: ${author}`); // Output: Author: Faisal
    console.log("Website:", website); // Output: SeekDigit.com
  }
  two();
  // console.log(website); // ❌ Error: website is not defined outside 'two()'
}

one();

// ==============================
// Additional Example 9: Block Scope in Control Statements (if/else)
// ==============================

if (true) {
  const username = "Hamdan";
  if (username === "Hamdan") {
    const web = " YouTube";
    console.log(username + web); // Output: Hamdan YouTube
  }
  // console.log(web); // ❌ Error: web is block-scoped inside inner if
}
// console.log(username); // ❌ Error: username is block-scoped inside outer if

// ==============================
// Additional Example 10: Function Declaration vs Function Expression
// ==============================

// Function Declaration
function addOne(num) {
  return num + 2;
}
console.log(addOne(10)); // Output: 12

// Function Expression (assigned to a variable)
const myName = function (name) {
  return name + " Khan";
};
console.log(myName("Faisal")); // Output: Faisal Khan

// ==============================
// Summary:
// - Rest operator collects arguments into an array
// - You can use objects or arrays as parameters in functions
// - Scope: Variables declared with const/let are block scoped
// - Lexical scope allows inner functions to access variables of outer ones
// - Function declarations are hoisted; expressions are not
