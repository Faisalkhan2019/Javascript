
// Destructuring = 
// extract values from arrays and objects, then assign them to variables in a convenient way 
// [] = to perform array descgtructuring
// {} = to perform Object desctructuring



// Object De-structuring in JS

//----------Chai Aur Code----------//


// Example - 1

const course = {
    coursename: "AI",
    price: 999,
    courseInstructor: "Faisal"
}

// course.courseInstructor // syntactic sugar

// const {courseInstructor} = course // method one
const {courseInstructor:Instructor} = course // method two to change courseinstructor property

// console.log(courseInstructor); // "Faisal"
// console.log(Instructor); // "Faisal"



// disctuion on API's and JSON

// {
//     "Author": "Faisal",
//     "postTitle": "Web Developer",

// } // APi's are in JSON format like thisf

// API's can in Array format like this this will be discussed in future lectures

// [
//     {},
//     {},
//     {}

// ]





// BroCode Tutorial //

// --------Example-1-------- //
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b, a] // left side array is destructuring and the right hand side is an array

// console.log(a); // 2
// console.log(b); // 1


// --------Example-2-------- //
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red", "green", "blue", "black", "white"];

//  [colors[0], colors[4]] = [colors[4], colors[0]]

//  console.log(colors); //[ 'white', 'green', 'blue', 'black', 'red' ]


// --------Example-3-------- //
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColors, thirdColor, ...extraColor] = colors

// console.log(firstColor); // red
// console.log(secondColors); // green
// console.log(thirdColor); // blue
// console.log(extraColor); // [ 'black', 'white' ] here we have used rest operator to get remaining elements of an array 



// --------Example-4-------- //
// EXTRACT VALUES FROM AN OBJECT

// const father = {
//     fName: "Faisal",
//     lName: "Khan",
//     age: 30,
//     job: "Web Developer",
// }
// const son = {
//     fName: "Hamdan",
//     lName: "Khan", 
//     age: 3,
    
// }
//Accessing Father information 

// const {fName, lName, age, job} = father

// // console.log(`Name: ${fName}, Last Name: ${lName}, Age: ${age}, and Job: ${job}`);

// console.log(fName);
// console.log(lName);
// console.log(age);
// console.log(job);


// const {fName, lName, age, job="unEmployed"} = son

// console.log(`Name: ${fName}, Last Name: ${lName}, Age: ${age}, and Job: ${job}`);

// console.log(fName);
// console.log(lName);
// console.log(age);
// console.log(job);


// --------Example-5-------- //
// DESTRUCTURING IN FUNCTIONS


function fatherInfo({fName, lName, age, job="unEmployed"}){
    
    console.log(`${fName}, ${lName}`);
    console.log(`${age}`);
    console.log(`${job}`);
    
}


const father = {
    fName: "Faisal",
    lName: "Khan",
    age: 30,
    job: "Web Developer",
}
const son = {
    fName: "Hamdan",
    lName: "Khan", 
    age: 3,
    
}
fatherInfo(son)

 
