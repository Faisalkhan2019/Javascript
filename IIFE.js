// An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that executes as soon as it is defined. It is a common pattern used to create a private scope for variables and functions, preventing them from polluting the global namespace.


// example: ()() => first () is function reference and second is function execution

// This is simple function //


// function myfun1(name){
//     // console.log(`My name is ${name}`);
    
// }
// myfun1("Faisal")


// this is IIFE function //

(function myfun2(){
    console.log("Database connected!");
    
})(); // (;) semicolons is must to execution next function 

((name)=>{
    console.log(`My name is ${name}`);
    
})("Faisal");
(()=>{
    console.log(`My name is Khan`);
    
})()