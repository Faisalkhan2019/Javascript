// Functions in Javascript // Lecture by Chai aur Code

// // fuction = A section of reuseable code.
//             Decalre code once change, use use whenever you wnat.
//              call the function to execute that code.

// --------First Example ----------//

// function myFun1(number1, number2){
// console.log(number1+number2);

// }

// myFun1(1,2); // Output: 3
// myFun1(1, "3"); // Output: 13
// const result = myFun1(1,2)
// console.log("Result: ", result); // undefined, here if we make a variable then  we dont need to add  console.log() inside of the function.

// ------ Example with return keyword --------//

function myFun2(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}
const result = myFun2(200, 100);
// console.log("Result: ", result);




// ------ Example with one parameter --------//

function myfun3(username){
    return `${username} just logged in`
    
}
// const userDisplay = myfun3("Muhammad Hamdan Khan")
// console.log(userDisplay);

// console.log(myfun3("Muhammad Hamdan Khan"));



// ------ More Example with if condition --------//

// function myFun4(username){
//     // if(username === undefined){
//     //     console.log("please enter username");
//     //     return
        
//     // }
//     if(!username){
//         // console.log("please enter username");
//         return
        
//     }
//     return `${username} logged in`
    
// }
// const myuser = myFun4("Hamdan Khan")
// // console.log(myuser)



function myFun4(username = "Hamdan"){
    // if(username === undefined){
    //     console.log("please enter username");
    //     return
        
    // }
    if(!username){
        console.log("please enter username");
        return
        
    }
    return `${username} logged in`
    
}
const myuser = myFun4("Hamdan Khan") // here value to be overwrited e.g default value is "Hamdan" then replaced into "Hamdan Khan"
console.log(myuser)








// summarized lecture by deepseek

// ========================================================================================//
/**
 * JavaScript Functions - Deep Dive
 * Based on "Chai aur Code" Lecture Series
 * 
 * Core Concept: 
 *   Functions are reusable blocks of code that perform specific tasks.
 *   They help avoid code repetition and make programs more organized.
 */

// =================================================================
// BASIC FUNCTION DECLARATION AND USAGE
// =================================================================

/**
 * Example 1: Simple Addition Function
 * 
 * This function takes two numbers and logs their sum.
 * Important: It uses console.log() so it DOES NOT return a value.
 * Calling this function results in 'undefined' if assigned to a variable.
 */
function addNumbers(num1, num2) {
  // Parameters (num1, num2) are placeholders for actual values
  console.log("Result:", num1 + num2); // Prints result directly
  
  // No return statement → function returns 'undefined'
}
// Function call with arguments (actual values)
addNumbers(3, 5);        // Output: "Result: 8"
addNumbers(3, "5");      // Output: "Result: 35" (type coercion)
const example1Result = addNumbers(3, 5); 
console.log(example1Result);  // Output: undefined (because no return)

// =================================================================
// RETURN STATEMENT ESSENTIALS
// =================================================================

/**
 * Example 2: Function with Return Statement
 * 
 * The return keyword:
 * 1. Stops function execution immediately
 * 2. Sends a value back to the function caller
 * 3. Allows function output to be stored in variables
 */
function calculateSum(num1, num2) {
  const result = num1 + num2;
  return result; // Sends value back to caller
  
  // Code after return NEVER executes:
  console.log("This will never run");
}

const sumResult = calculateSum(10, 20);
console.log("Returned value:", sumResult); // Output: "Returned value: 30"

// =================================================================
// PARAMETERS AND ARGUMENTS
// =================================================================

/**
 * Example 3: Single Parameter Function
 * 
 * Parameters vs Arguments:
 * - Parameters: Variables in function declaration (username)
 * - Arguments: Actual values passed during function call ("Hamdan")
 */
function welcomeUser(username) {
  // Template literal for string interpolation
  return `Welcome back, ${username}!`; 
}

const welcomeMessage = welcomeUser("Hamdan Khan");
console.log(welcomeMessage); // Output: "Welcome back, Hamdan Khan!"

// =================================================================
// HANDLING MISSING ARGUMENTS
// =================================================================

/**
 * Example 4: Validation and Default Parameters
 * 
 * Techniques to handle missing arguments:
 * 1. Falsy checks (!username)
 * 2. Early returns to exit function
 * 3. Default parameter values (username = "Guest")
 */

// Version 1: Falsy Check and Early Return
function loginUser(username) {
  if (!username) { // Checks for undefined/null/empty string
    console.log("Error: Username required");
    return; // Exits function early
  }
  return `${username} logged in successfully`;
}

console.log(loginUser());      // Error message → returns undefined
console.log(loginUser(""));    // Error message → returns undefined
console.log(loginUser("Ali")); // "Ali logged in successfully"

// Version 2: Default Parameter Value
function userGreeting(username = "Guest") {
  // Default value used if argument missing/undefined
  return `Hello, ${username}!`; 
}

console.log(userGreeting());        // "Hello, Guest!"
console.log(userGreeting("Sarah")); // "Hello, Sarah!"

// =================================================================
// REAL-WORLD APPLICATION EXAMPLE
// =================================================================

/**
 * User Authentication Function
 * 
 * Combines parameter handling, validation, and returns
 * Demonstrates practical function design
 */
function authenticateUser(username = "guest", password) {
  // Validate credentials
  if (!username.trim() || !password) {
    return "Username and password required";
  }
  
  // Check credentials (simulated)
  if (username === "admin" && password === "secret123") {
    return "Admin access granted";
  } else {
    return "Invalid credentials";
  }
}

// Test cases
console.log(authenticateUser("admin", "secret123")); // "Admin access granted"
console.log(authenticateUser("", "pass"));           // "Username and password required"
console.log(authenticateUser("user"));               // "Username and password required"

// =================================================================
// KEY TAKEAWAYS (LECTURE SUMMARY)
// =================================================================

/*
1. Function Declaration:
   function functionName(parameters) {
     // logic
   }

2. Return vs Console.log:
   - Use return to send data back
   - Use console.log only for debugging

3. Parameter Handling:
   - Always validate inputs
   - Use default values for optional parameters
   - Check for falsy values: undefined, null, "", 0

4. Best Practices:
   - Single Responsibility: One function = one task
   - Meaningful names: calculateTotal() vs calc()
   - Parameter validation at function start

5. Advanced Concepts (Preview):
   - Arrow functions: const add = (a,b) => a + b
   - Rest parameters: function sum(...numbers)
   - Callback functions: functions passed as arguments
*/

// =================================================================
// FUNCTION EXERCISES (PRACTICE THESE)
// =================================================================

// 1. Create function that calculates area of rectangle
//    Hint: area = length × width

// 2. Make login function with email/password params
//    Return "Login success" if email and password match

// 3. Create function with default parameter for 
//    calculating tax (default tax rate 15%)        
