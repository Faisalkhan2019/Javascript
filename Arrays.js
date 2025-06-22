// Lecture No. 14

// Arrays

let arr = ["Faisal", "Anam", "Hamdan", "Salwa", "Anaya"];

const arr2 = [0, 1, 2, 3, 4];
const arr3 = new Array(0, 1, 2, 3);

// console.log(typeof arr3);
// console.log(arr3);

// Arrays Methods

// arr2.push(5) // add 5 at the end of array
// arr2.push(66) // add 5 (elem) at the end of array
// arr2.pop() // Removes the last element from an array
// arr2.unshift("AD Khan", "Khan") //Adds one or more elements to the beginning of an array.
// arr2.shift() //Removes the first element from an array.

// console.log(arr2.includes(3))// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(arr2.indexOf(2)); //The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const myArr = arr2.join();
// console.log(myArr)

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// Expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// Expected output: "FireAirWater"

// console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const myNewArry = ["Faisal", "Anam", "Anaya", "Salwa", "Hamdan"];

// const myNArr = myNewArry.slice(1, 3)

// console.log(myNewArry);

// console.log(myNArr);

// The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

const myNArr = myNewArry.splice(0, 1, "Lahore");

// console.log(myNArr);
// console.log(myNewArry);


// for loop in Array 


const myBooks = [
  "Islamic Studies",
  "Computer Science",
  "History of Pakistan",
  "Urdu",
  "English"
];

// method - 1

for (i = 0; i < myBooks.length; i++) {
  const elem = myBooks[i];
//   console.log(`${i}: ${elem}`);
}

// method - 2

for(x = 0; x< myBooks.length; x+=3){
    // console.log(myBooks[x])
}

// method - 3 (shortcut method)

// myBooks.sort(); // to sort array elements alphabatically 
myBooks.reverse(); // to reverse order array elements from bottom to top

for (let books of myBooks){
    console.log(books);
    
}





