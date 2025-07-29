// // Scope Level and  mini hoisting in Javascript


// function one() {
//   const author = "Faisal";
//   function two() {
//     const website = "SeekDigit.com";
//     // console.log(`Author: ${author}`);
//     // console.log("Author:" + author); // all methods are correct
//     // console.log("Author:", author);
//   }
//     // console.log(`Website is: ${website}`);
//   two();

  
// }
// one();


// // example 2 using control statement if else etc

// if(true){
//     const username = "Hamdan"
//     if (username  === "Hamdan"){
//         const web = " youtube"
//         console.log(username + web);
        
//     }
//     // console.log(web); // output: error
    
    
// }
// // console.log(username) // error 


// function addOne(num){
//     return num + 2;
// }
// console.log(addOne(10)); // Output: 12




// const myName = function (name){
//           return name + " Khan"
// }
// console.log(myName("Faisal"));



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


