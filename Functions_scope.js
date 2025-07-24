// let a = 102;
const b = 20;
var c = 300; //var variable is global scope

if (true) {
  let a = 10; // this let is will work inside the scope, if remove let keyword then this will go outside the scope
  //  const b = 20;
  c = 30;
  console.log("INNER", a);
}
// console.log(a);
console.log(b);
console.log(c);

//-------Practice

// let arr = ["Islamic Studies", "General Knowledge", "Pakistan Studies"];

// for (i = 0; i < arr.length; i = i + 1) {
//   let elem = arr[i];
//   console.log(`${i}: ${elem}`);
// }

// let stdNames = ["Anaya", "Hamdan", "Miral Khan", "Salwa"]
// let stdNames = "Anaya";

// for (names of stdNames) {
//   console.log(names);
// }

// nested functions

function funOne() {
  let username = "Faisal";
  function funTwo() {
    let web = "thehamdan.com";
    // console.log(username, web); // this will run without error
  }
  console.log(web); //this will give error due to outside of scope

  // funTwo();
}
funOne();

// nested if else

if (true) {
  let username = "Hamdan";
  if (username === "Hamdan") {
    let website = "youtube";
    // console.log(username); // this will run without error
  }
  // console.log(website); this will give error
}

// ------------Interesting function ------------

// addOne(10); // This works because the function declaration is hoisted to the top.
function addOne(num) {
  //   return num + 1;
  // console.log(x); // Reference Error
  let x = 20;
  //   console.log(num+1)
}
addOne(20);

// addTwo(10); //  Function expressions are NOT hoisted because they are assigned to variables.
const addTwo = function (num) {
  return num + 10;
};

addTwo(10);
