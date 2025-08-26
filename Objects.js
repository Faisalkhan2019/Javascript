// const obj = {
//     name: "Hamdan",
//     age: 3,
//     class: "PG"
// }
// let myObj = obj
// console.log(`Your name is ${myObj.name}`);
// console.log(`Age: ${myObj.age}`);
// console.log(`Class: ${myObj.class}`);

// Objects

// Example - 1

// Singleton
// Object.create

//Object Literals

const mySym = Symbol("key1"); // adding symbol value in object

const jsUser = {
  "full name": "Faisal Khan", // this value cannot be access with dot (.) notation

  name: "Faisal",
  age: 30,
  location: "Lahore",
  email: "faisal@google.com",
  isStudent: false,
  lastloggin: ["Monday", "Friday"],
  [mySym]: "myKey",
};


// console.log(jsUser.email);
// console.log(jsUser["email"]); // another method to access value
// console.log(jsUser["full name"]); // another method to access value
// console.log(jsUser[mySym]); // method to access symbol value


// -------------Changing/overwrite values in objects -----------


jsUser.email = "hamdan@google.com"
// console.log(jsUser.email);

// Object.freeze(jsUser) // to freeze (not changed) the Object values

jsUser.name = "Hamdan"
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log(`Hi JS User `); 
    
}
jsUser.greetingTwo = function(){
    // console.log(`Hi JS User ${this["full name"]}`); // when you need to reference same object then you have to use "this" keyword to access value. Or to check the Object properties using "this" keyword this way. 
    
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());



// ---------Lecture 2 --------- //

// const myApp = new Object() // this is singleton object

// Example - 1 

const myApp = {}

myApp.id = "123abc"
myApp.name = "Faisal"
myApp.isLoggedIn = false


// Example - 2
const myObj2 = {
    email: "hamdan@seekdigit.com",
    fullname: {
       userFullName:{
        firstName: "Anaya",
        lastName: "Khan"
       }
    }
}
// console.log(myObj2.fullname?userFullName.firstName);
// console.log(myObj2.fullname.userFullName.firstName);

const myObj3 = {1: "A", 2: "B"}
const myObj4= {4: "C", 5: "D"}

// const objResult = {...myObj3, ...myObj4} // spread operators 
// const objResult = {myObj3, myObj4} // object inside object 
// const objResult = Object.assign({}, myObj3, myObj4) // {} target object and rest all objects are resource

// console.log(objResult);


const dbData = [
    {
        id: 1,
        name: "Faisal"
    },
    {
        id: 2,
        name: "Hamdan"
    },
    {
        id: 3,
        name: "Anaya"
    }
]
// console.log(dbData[0].name)


console.log(Object.keys(myApp)); // to get object keys as an array
console.log(Object.values(myApp)); // to get object values as an array
console.log(Object.entries(myApp)); // 

console.log(myApp.hasOwnProperty('names')); // to check property of object 



// console.log(Object.keys(myObj2)); // when we use Object.keys(Obj name) then all object values to be stored in Array







