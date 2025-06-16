// ---Lecture-5---


// "use strict"; // treat all JS code as newer version and if we do not write "use strict" it would worked

console.
log("Faisal"); // code readability should be high
// console.log("Hamdan");


let name = "Faisal" // String
let age = 30 // number
let City; // undefined
let stdId = true  // boolean
let temp = null; // object


// ----Primitive Data Types---- Stack Memory
// (Simple, immutable values)

// String	=> Text
// Number	=> Integer or decimal
// Boolean	=> true or false
// Undefined =>	A variable declared but no value, and undefined itself a type
// Null	=> Represents no value or standalone value  
// BigInt =>	Large integers (ES2020+)
// Symbol =>	Unique identifiers (advanced)


const score = 100

const myScore = parseInt(100.2)


const id = Symbol("123")
const id2 = Symbol("123")



// console.log(id === id2); // output: false


const bigNum = 123456789084242554

// console.log(bigNum);








// ----Reference (Non-Primitive) Data Types (Objects) ---- Heap Memory
// (Complex, mutable values)

// Object	=> Collection of key-value pairs
// Array	=> Ordered collection of values
// Function	=> Block of reusable code


// ----Summary Table----

// String -	"hello"	- "string"
// Number - 42 -	"number"
// Boolean	- true -	"boolean"
// Undefined	- let x;	- "undefined"
// Null	- null	- "object"*
// BigInt	- 123456789n - "bigint"
// Symbol	- Symbol("id")	- "symbol"
// Object -	{ name: "Ali" } -	"object"
// Array - 	["a", "b", "c"] -	"object"
// Function -	function() {}	- "function"


let myfun   = function(a,b,c)
{
    return a*b+c

    
    
}

console.log(myfun(100,2,100))
console.log(typeof myfun)






