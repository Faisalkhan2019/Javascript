


// ---Lecture-4---

// Basic Understanding of Variables

const accountId = 12345;
let accountEmail = "faisal@gmail.com";
var accountPassword = "123";
accountCity = "Lahore";

// accountId = 2020
accountEmail = "hamdan@gmail.com";
accountPassword = 2030;
// accountCity = "Islamabad";
// console.table([accountId, accountEmail, accountPassword, accountCity]);

// prefer not to use var because of issue functional scope and block scope

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// let myFun = function(x=100, y=200){

//     return x+y;

// }
// fun = myFun()
// console.log(fun);
fun2(); //this will run
function fun2() {
  // console.log("My Name is Faisal");
}

let var1 = function () {
  return "my name is Hamdan";
};
// console.log(var1()) // this will not run due to let variable

// for loop basic

// for (var i = 0; i <= 5; i++) {
// console.log(i);
// }

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    // console.log(`You found ${i} `);
    break;
  }
  // console.log(i);
}


// const name ="Hamdan"
if(true){
  const name ="Faisal"
  // console.log(name);
  
}
// console.log(name);


const person = {
  name: "Faisal",
  age: 30,
  city: "Lahore",
  email: "faisal@google.com"
}

person.name = "Hamdan"

// console.log(person.name);




// const variables behave similarly to let variables, you cannot use const to declare for loop iterators:
// for (const i = 0; i < 10; ++i) {} // TypeError: assignment to constant variable


// console.log(null == undefined); // true 

// let lang = "Java"
// lang = lang +"Script"

// console.log(lang);



