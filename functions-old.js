// What is Javascript Functions

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// Example - 1

const myNames = ["Faisal", "Hamdan Khan"];

let myfun = function (name) {
  return `How are you ${name}`;
};
console.log(myfun(`${myNames[0]}`));

// Example - 2 - sum two numbers

function sumTwoNum(num1, num2) {
  // let sum = num1 + num2
  // return sum
  return num1 + num2;
}
let sum = sumTwoNum(100, 200);
// console.log(sum);

// Example 3

function userLogin(userName) {
  // if(userName === undefined){
  //     console.log("Please Enter User Name First");
  //     return
  // }
  //  both methods are same
  if (!userName) {
    // console.log("Please enter username");
  } else {
    return `${userName} Logged in`;
  }
}
const users = userLogin("Hamdan Khan");
// console.log(users);

// Example 4 here we can give default parameter value in function

let stdName = function (name = "Hamdan") {
  if (!name) {
    // console.log("Please enter your name");
    return;
  }
  return `your name is: ${name}`;
};
// console.log(stdName()); // dont need to write value here
// console.log(stdName("Muhammad Hamdan Khan")); // if we write value here it will be overwritten default value

// Example 5 Rest/Spread Operator in Fucntions

function calculateCartPrice(num1, num2, ...num3) {
  return num3;
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));

// Example 6 how to access object in function

//-----Start--------

const customerDetail = {
  // this is an object
  name: "Faisal",
  price: 199,
};

function custDetail(anyObj) {
  // console.log(`Customer name is: ${anyObj.name},\nproduct price is: ${anyObj.price}`);
}
custDetail(customerDetail); //call object name here

// custDetail({ // direct accessing object without making first
//     name: "Hamdan",
//     price: 199
// })

//-----End--------

//-----Accessing Array in JS Functions--------

const newArray = [200, 300, 400];

function getValueofArray(value) {
  return value[2];
}
// console.log(getValueofArray(newArray));
// console.log(getValueofArray([200,300,400])); // direct giving Array in function execuation

//-----End--------

// Example 6

function isEven(number) {
  //   if (number % 2 === 0) {
  //     console.log(`${number} this is even number`);
  //   } else {
  //     console.log(`${number} this is odd number`);
  //   }
  return number % 2 === 0 ? "This is Even Number" : "This is Odd Number"; // this is ternary operator we can use replacing if else statements
}
// console.log(isEven(12));

// const mysteryArray = [1, 2, 3];

// function addToArray(arr) {
//  arr.push(4);
//  return arr;
// }

// const result = addToArray(mysteryArray);
// mysteryArray[0] = 99;

// console.log(result);
