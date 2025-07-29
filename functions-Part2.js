// In this lecture we learn about Rest/Spread operator in Javascript using function

// example 1 - one parameter using Rest operator (...)

function calculateCartPrice(...num) {
  return num;
}
const price = calculateCartPrice(199, 200, 300);
// console.log(price);  // output: [ 199, 200, 300 ]

// example 2 - two parameters using Rest operator (val1, val2, ...rest)

function calculateCartPrice(price1, price2, ...price3) {
  return price3;
}
const price2 = calculateCartPrice(199, 200, 300);
// console.log(price2);  //  output: [ 300 ]

// example 3 - handle Object using function

// first I will create object

const students = {
  name: "Hamdan",
  age: 3,
  class: "PG",
};

function handleObj(anyObj) {
  // console.log(`Student name is: ${anyObj.name}, age ${anyObj.age} and his class ${anyObj.class}`);
}
// handleObj(students) // here you have to pass actual object name as an argument

// example 4 - creating Object as an function argument directly

// here I will take previous function

handleObj({
  name: "Hamdan Khan",
  age: 4,
});



// example 5 - handle Array using function

const cartPrice = [100, 200, 300];

function handleArrays(getArray) {
  return getArray[2];
}
// console.log(handleArrays(cartPrice));
console.log(handleArrays([1, 2, 3, 4]));
