// Stack and Heap Memory in Javascript

// Stack => Primitive 
// Heap => non primitive or reference type

let myName = "Faisal"

let anotherName = myName
anotherName = "Hamdan"

// console.log(myName);
// console.log(anotherName);







let user = {
    name: "Faisal",
    city: "Lahore"
}
let user2 = user
console.log(user.name);
console.log(user2.name);
