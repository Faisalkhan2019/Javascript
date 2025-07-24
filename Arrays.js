// Lecture No. 14

// Arrays

let arr = ["Faisal", "Anam", "Hamdan", "Salwa", "Anaya"];

const arr2 = [0, 1, "Faisal", 3, 4, "Khan"];
const arr3 = new Array(0, 1, 2, 3);

// console.log(typeof arr3);
// console.log(arr3);

// Arrays Methods

// arr2.push(5) // add 5 at the end of array
// arr2.push(66) // add 66 (elem) at the end of array
// arr2.pop() // Removes the last element from an array
// arr2.unshift("AD Khan", "Khan") //Adds one or more elements to the beginning of an array.
// arr2.shift() //Removes the first element from an array.

// console.log(arr2.includes(5))// "true" The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(arr2.indexOf("Khan")); //The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const myArr = arr2.join();
// console.log(myArr)
// console.log(typeof myArr);


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

// console.log(myNArr);


// The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

myNewArry.splice(2, 1, "Lahore");
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
  // console.log(`${i}: ${elem}`);
}

for( ar = 0; ar <myBooks.length; ar++){
  // console.log(myBooks[ar]);
  
}
// method - 2

for(x = 0; x< myBooks.length; x+=2){
    // console.log(myBooks[x])
}

// method - 3 (shortcut method)

// myBooks.sort(); // to sort array elements alphabatically 
myBooks.reverse(); // to reverse order array elements from bottom to top

for (let books of myBooks){
    // console.log(books);
    
}


// Arrays - Part 2


const myHeros = ["Quaid e Azam", "Alama Iqbal", "Imran Khan"]
const fruits = ["Banana", "Orange", "Kiwi"]
const myNum = [1,2,4,5]
// myHeros.push(fruits) // Array fruits to be added inside the myHeros array as a array element.
// console.log(myHeros)
// console.log(myHeros[3][2]); // Kiwi

const myBothArr = myHeros.concat(fruits)

// The concat() method concatenates (joins) two or more arrays and returns a new array, containing the joined arrays. method does not change the existing arrays.

// console.log(myBothArr);

const mySpreadArr = [...myHeros, ...fruits, ...myNum] // this is spread operator method in arrays to join or merge two or arrays 
// console.log(mySpreadArr); // Same Result as per cancat()  but this is useful method



const arr1 = [0, 1, 2, [3, 4], [5,6,7],8];

// console.log(arr1.flat());
// console.log(arr1[4]);
// expected output: Array [0, 1, 2, 3, 4, 5, 6, 7, 8]

const arr4 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr4.flat()); 
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr4.flat(2)); // defined depth
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr4.flat(Infinity)); // we dont need to defined depth you can just write (Infinity).
// expected output: Array [0, 1, 2, 3, 4, 5]


// ------------------ //

const myNewArray = "Hamdan"
// console.log(Array.isArray(myNewArray)) //false
// console.log(Array.from("Hamdan")); //[ 'F', 'a', 'i', 's', 'a', 'l' ]
// console.log(Array.from(myNewArray)); //[ 'F', 'a', 'i', 's', 'a', 'l' ]


// console.log(Array.from({name: "Faisal"})); // [] but Interesting need to learn this method

const score1 = 100
const score2 = 200
const score3 = 300 

// console.log(score1,score2,score3);
// console.log(Array.of(score1,score2,score3));
// Expected Output: [ 100, 200, 300 ]



console.log(Object.keys({name: "Faisal"})); 
console.log(Object.values({name: "Faisal"})); 
// Output: [['name', 'Faisal']]





